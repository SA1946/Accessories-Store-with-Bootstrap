import { categories, All_Products } from "./data/data.js";

class SpecialNavbar extends HTMLElement {
  connectedCallback() {
    // const isLoggedIn = localStorage.getItem("isLoggedIn");
    // localStorage.setItem("isLoggedIn", "true");
    // const loginPath = isLoggedIn ? "././loginPage.html" : "";
    // console.log("isLoggedIn:", isLoggedIn);
    const loginPath = "././loginPage.html";
    console.log("Login path:", loginPath);

    this.innerHTML = `
            <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="./index.html">
          <img
            style="height: 50px"
            src="./image/Shopify-Logo-PNG.png"
            alt="shop_logo"
          />
        </a>
        <!------Shop icon responsive------>
        <div
          class="shop-user-icon d-flex align-items-center d-lg-none d-md-block d-block ms-auto"
        >
          <!-- <i class="bi bi-shop-window text-light fs-4 me-5"></i> -->
          <a href="" class="me-2 fs-3">
            <i class="bi bi-person text-light"></i>
          </a>
          <a
            href=""
            class="me-3 fs-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="bi bi-cart text-light"></i>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <div class="categories-block d-lg-flex align-items-center"></div>
          </ul>
          <div class="d-lg-flex align-items-center">
            <!------form search----->
            <form class="mx-auto d-md-block w-50 d-block" role="search">
              <input
                id="search-input"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
             
            <!------Shop icon------>
            <div class="shop-user-icon pointer-event  d-lg-block d-md-none d-none">
              <a target="_blank" href="${loginPath}" class="me-3 ms-3 fs-3">
                 <i class="bi bi-person text-light"></i>
              </a>
              
              <a
                href=""
                class="me-5 fs-4"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i class="bi bi-cart text-light"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="search-results" class="search-results-container" style="display: none;"></div>
        `;
    this.relativeCategories();
    this.setupSearch();
  }

  relativeCategories() {
    // ------- categories start with navbar --------
    var category_block = document.querySelector(".categories-block");

    if (typeof categories !== "undefined") {
      categories.map((category) => {
        if (category.types) {
          let dropdown_menu = ``;
          dropdown_menu += `
          <li class="nav-item dropdown">
          <a
          class="nav-link text-light dropdown-toggle"
          href=""
          role="button"
          aria-expanded="false"
          >
          ${category.name}
          </a>
          <ul class="dropdown-menu">`;

          category.types.map((type) => {
            dropdown_menu += `
            <li><a class="dropdown-item" href="">${type.name} </a></li>
            `;
          });

          dropdown_menu += `
          <li><hr class="dropdown-divider text-bg-danger" /></li>
          </ul>
          </li>`;

          category_block.innerHTML += dropdown_menu;
        } else {
          let menu = ``;
          menu += `
          <li class="nav-item">
          <a class="nav-link text-light" href=""> ${category.name} </a>
          </li>
          `;
          category_block.innerHTML += menu;
        }
      });
    }
  }

  setupSearch() {
    const searchInput = this.querySelector("#search-input");
    const resultsContainer = this.querySelector("#search-results");

    // Debounce function to avoid too many searches
    let searchTimeout;

    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length === 0) {
        this.hideResults(resultsContainer);
        return;
      }

      // Debounce search for better performance
      searchTimeout = setTimeout(() => {
        this.performSearch(query, resultsContainer);
      }, 300);
    });

    // Handle form submission
    const form = this.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        this.performSearch(query, resultsContainer);
      }
    });

    // Hide results when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        this.hideResults(resultsContainer);
      }
    });
  }

  performSearch(query, resultsContainer) {
    const results = this.searchData(query);

    this.displayResults(results, resultsContainer, query);
  }

  searchData(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];

    // Search in your data array
    All_Products.forEach((item) => {
      // Customize this based on your data structure
      const searchableFields = [
        item.category || "",
        item.name || "",
        item.description || "",
        item.brand || "",
      ]
        .join(" ")
        .toLowerCase();

      if (searchableFields.includes(lowerQuery)) {
        results.push({
          ...item,
          relevance: this.calculateRelevance(searchableFields, lowerQuery),
        });
      }
    });

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance);
  }

  calculateRelevance(text, query) {
    const matches = (text.match(new RegExp(query, "gi")) || []).length;
    const titleBoost = text.startsWith(query) ? 2 : 1;
    return matches * titleBoost;
  }

  displayResults(results, container, query) {
    if (results.length === 0) {
      container.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
      container.style.display = "block";
      return;
    }

    const maxResults = 5; // Limit dropdown results
    const limitedResults = results.slice(0, maxResults);

    container.innerHTML = `
      <div class="search-dropdown">
        ${limitedResults
          .map(
            (item) => `
          <div class="search-result-item" data-id="${item.id || ""}">
            <strong>${this.highlightMatch(
              item.title || item.name || "",
              query
            )}</strong>
            ${
              item.description
                ? `<div class="text-muted small">${this.highlightMatch(
                    item.description,
                    query
                  )}</div>`
                : ""
            }
          </div>
        `
          )
          .join("")}
        ${
          results.length > maxResults
            ? `<div class="text-muted small text-center">... and ${
                results.length - maxResults
              } more results</div>`
            : ""
        }
      </div>
    `;

    container.style.display = "block";

    // Add click handlers for result items
    container.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const itemId = e.currentTarget.getAttribute("data-id");
        this.handleResultClick(
          itemId,
          results.find((r) => r.id == itemId)
        );
      });
    });
  }

  highlightMatch(text, query) {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  handleResultClick(itemId, item) {
    // Dispatch event when result is clicked
    document.dispatchEvent(
      new CustomEvent("search-result-clicked", {
        detail: { itemId, item },
      })
    );

    // Hide results
    this.hideResults(this.querySelector("#search-results"));

    // Clear search input (optional)
    this.querySelector("#search-input").value = "";
  }

  hideResults(container) {
    container.style.display = "none";
    container.innerHTML = "";
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <div class="footer">
      <div class="container">
        <div class="row p-0 m-0">
          <!-----one-col----->
          <div class="col-lg-3 col-md-4 col-12 pt-2 blox-1">
            <div class="shop mb-3">
              <img src="./image/Shopify-Logo-PNG.png" alt="" />
              <span class="fs-5">Saa-shoping</span>
            </div>
            <ul class="list-style">
              <li>&copy;Copyright 2025</li>
              <li>
                <a href="https://github.com/SA1946">Sa1946.github</a>
              </li>
              <li>All right reserved</li>
              <li class="mt-3">Made at</li>
              <li>
                <a href="#">measreaksa0@gmail.com</a>
              </li>
            </ul>
          </div>

          <!-----one-col----->
          <div class="col-lg-3 col-md-4 col-12 pt-4 blox-2">
            <div class="vertical-line d-lg-block d-md-none d-none"></div>

            <ul class="list-style">
              <li>Get in Touch</li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Request a topic for a lesson</a>
              </li>
              <li>
                <a href="#">Direct Message by :</a>
              </li>
            </ul>
            <div class="contact-icon fs-5 mt-4 d-flex justify-content-center">
              <a href="https://www.facebook.com/share/1ApV4nCifc/">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://t.me/M_Reaksa1946">
                <i class="bi bi-telegram"></i>
              </a>
              <a href="https://youtube.com/@reaksameasdev?si=U6ITDBIrJsRoZmyX">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="#">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
            <div class="horizontal-line d-lg-none d-md-block d-none mt-4"></div>
          </div>
          <!-----one-col----->
          <div class="col-lg-3 col-md-4 pt-4 col-12 blox-3">
            <div class="vertical-line d-lg-block d-md-none d-none"></div>
            <ul class="list-style">
              <li>Info</li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Term of Use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Cookie Declaration</a></li>
            </ul>
          </div>
          <!-----one-col----->
          <div class="col-lg-3 col-md-12 col-12 pt-4 blox-4 last-col-footer">
            <div class="vertical-line d-lg-block d-md-none d-none"></div>
            <a
              href="#"
              class="ms-3 mb-3 ps-5 pe-5 btn text-light border border-2 border-light btn-outline-success"
              >Take a level test</a
            >
            <a
              href="#"
              class="ms-3 mb-3 ps-5 pe-5 btn text-light border border-2 border-light btn-outline-success"
              >Upgrade to pro</a
            >
            <div
              class="horizontal-line2 d-lg-none d-md-block d-none mt-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
        `;

    // document.dispatchEvent(new CustomEvent("footer-loaded"));
  }
}
class SpecialOffcanvas extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
        <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Your added Card
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <!-----List item----->
        <div class="card-item-list"></div>

        <div class="checkout">
          <button class="btn text-light btn-secondary btn-outline-success">
            Product Checkout
          </button>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("special-footer", SpecialFooter);
customElements.define("special-navbar", SpecialNavbar);
customElements.define("special-offcanvas", SpecialOffcanvas);
