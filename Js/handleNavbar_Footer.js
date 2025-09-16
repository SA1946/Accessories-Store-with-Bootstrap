import { categories, All_Products } from "./data/data.js";
import { searcHandler } from "./searchHandler.js";

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
          class="shop-user-icon  d-lg-none d-md-flex d-flex ms-auto align-items-center justify-content-center "
        >
        <a href="" class=" fs-5 "
         data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
        <i class="bi bi-search text-light fs-6  fw-bold  "></i>
          </a>
          <a href="" class=" fs-5 mx-3 ">
            <i class="bi bi-person text-light"></i>
          </a>
          <a
            href=""
            class="me-3 fs-5"
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
          class="collapse navbar-collapse text-center w-100 "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 fw-bold">
            <div class="categories-block d-lg-flex align-items-center"></div>
          </ul>
          <div class=" d-lg-flex align-items-center w-75 d-md-none d-none   align-items-center ">
            <!------form search----->
            <form class=" fs-5 d-flex w-50 ms-auto justify-content-center align-items-center " role="search">
              <div class=" w-100 d-flex position-relative " >
              <i class="bi bi-search  position-absolute top-50 start-0 translate-middle-y fw-bold  ms-3 "></i>
              <input
              id="search-input"
              class="form-control ps-5 fw-normal rounded-0 rounded-start border border-0 "
              type="search"
              placeholder="Search"
              aria-label="Search"              
              />
              </div>
              <button class="btn  rounded-0 btn-search   rounded-end  bg-primary  text-white fw-normal" type="submit">Search</button>
            </form>
             
            <!------Shop icon------>
            <div class="shop-user-icon pointer-event d-flex justify-content-center align-items-center   ">
              <a target="_blank" href="${loginPath}" class="me-3 ms-3 fs-3">
                 <i class="bi bi-person text-light"></i>
              </a>
              
              <a
                href=""
                class=" fs-4"
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
    <div id="search-results" class="search-results-container " style="display: none;"></div>
        `;
    this.relativeCategories();
    this.searchInput = new searcHandler(All_Products);

    const searchInput = this.querySelector("#search-input");
    const resultsContainer = this.querySelector("#search-results");
    this.searchInput.setUpSearch(searchInput, resultsContainer);
  }

  relativeCategories() {
    // ------- categories start with navbar --------
    var category_block = document.querySelector(".categories-block");

    if (typeof categories !== "undefined") {
      // typeof categories return obj
      categories.map((category) => {
        if (category.types) {
          // console.log(category.types);
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
            <li>
            
            <button class="dropdown-item border border-0  text-secondary  " 
          onclick="window.location.href = './product.html?productId=${category.name}-${type.audience}' "                                    
          > ${type.audience} </button>
            </li>
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
          <!--<a class="nav-link text-light" href=""> ${category.name} </a>-->
          <button class=" border border-0 bg-transparent text-white fw-bold  " 
          onclick="window.location.href = './product.html?productId=${category.name}' "                                    
          > ${category.name}  </button>
          </li>
          `;
          category_block.innerHTML += menu;
        }
      });
    }
  }
}

class SpecialFooter extends HTMLElement {
  btn;
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
class SpecialOffcanvasRight extends HTMLElement {
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

class SpecialOffcanvasTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
  <div class="offcanvas h-100  offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-primary fw-bold fs-3 mt-3 mx-auto" id="offcanvasTopLabel"> Find Your Devices </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
            <form class=" mx-5 fs-5 d-flex  justify-content-center align-items-center " role="search">
              <div class=" w-100 d-flex position-relative " >
              <i class="bi bi-search  position-absolute top-50 start-0 translate-middle-y fw-bold  ms-3 "></i>
              <input
              id="search-input"
              class=" py-4  form-control ps-5 fw-normal rounded-5  border border-2 border-primary "
              type="search"
              placeholder="Search for products..."
              aria-label="Search"              
              />
              </div>
              
            </form>
            <div id="search-results-top" class="w-100 search-results-container-top " style="display: none;"></div>
            </div>
    `;

    this.searchInput = new searcHandler(All_Products);
    const Input = this.querySelector("#search-input");
    const results = this.querySelector("#search-results-top");
    this.searchInput.setUpSearch(Input, results);
  }
}
customElements.define("special-footer", SpecialFooter);
customElements.define("special-navbar", SpecialNavbar);
customElements.define("special-offcanvas-right", SpecialOffcanvasRight);
customElements.define("special-offcanvas-top", SpecialOffcanvasTop);
