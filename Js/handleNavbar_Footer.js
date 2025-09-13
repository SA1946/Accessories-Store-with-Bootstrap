const categories = [
  {
    id: 1,
    name: "Phone",
    stock: 100,
    description: "Smartphones and feature phones",
  },
  {
    id: 2,
    name: "Computer",
    stock: 50,
    description: "Laptops and desktops",
    // img: "./image/computers-store.jpg",
  },
  {
    id: 3,
    name: "Watch",

    types: [
      {
        id: 1,
        name: "For man",
      },
      {
        id: 2,
        name: "For women",
      },
    ],
    stock: 20,
    description: "Smartwatches and fitness trackers",
    // img: "./image/watch3.webp",
  },
  {
    id: 4,
    name: "Clothes",
    types: [
      {
        id: 1,
        name: "For man",
      },
      {
        id: 2,
        name: "For women",
      },
    ],
    stock: 20,
    // img: "https://cdn.shopify.com/s/files/1/1213/2346/files/1.2.jpg?v=1610121812",
  },
];

class SpecialNavbar extends HTMLElement {
  connectedCallback() {
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
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <!------Shop icon------>
            <div class="shop-user-icon pointer-event  d-lg-block d-md-none d-none">
              <a target="_blank" href="./loginPage.html" class="me-3 ms-3 fs-3">
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
        `;
    this.relativeCategories();

    // document.dispatchEvent(new CustomEvent("navbar-loaded"));
  }

  relativeCategories() {
    // ------- categories start with navbar --------

    var category_block = document.querySelector(".categories-block");
    if (typeof categories !== "undefined") {
      categories.map((category, index) => {
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

customElements.define("special-footer", SpecialFooter);
customElements.define("special-navbar", SpecialNavbar);

// let componentsLoaded = {
//   navbar: false,
//   footer: false,
// };

// document.addEventListener("navbar-loaded", () => {
//   componentsLoaded.navbar = true;
//   checkAllComponentsLoaded();
// });
// document.addEventListener("footer-loaded", () => {
//   componentsLoaded.navbar = true;
//   checkAllComponentsLoaded();
// });

// function checkAllComponentsLoaded() {
//   if (componentsLoaded.navbar) {
//     document.dispatchEvent(new CustomEvent("all-components-ready"));
//   }
// }
