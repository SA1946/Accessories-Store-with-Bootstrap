// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("view-detail")) {
//     event.preventDefault();
//     // event.stopPropagation(); // Prevent the product_model from being called
//     const productId = event.target.getAttribute("data-product-id");

//     showproductDetail(productId);
//     // console.log(productId);

//     //----close modal with Jquery----
//     $("#view-product").modal("hide");
//   }
// });
// function showproductDetail(productId) {
//   let productFind = All_Products.find((product) => product.id == productId);
//   if (!productFind) return;
//   console.log(productFind);
//   hide the maincontainer
// const mainContainer = document.querySelector(".container");
// mainContainer.classList.add("d-none");
//   show the product detail container
// let container2 = document.querySelector(".for-container-height");
// if (!container2) {
// container2 = document.createElement("div");
// container2.className = "container mt-3";
// container2.classList.add("for-container-height , container mt-3");
// }
//   container2.innerHTML = `
//             <div class="row m-0 p-0">
//         <div class="col-lg-5 col-md-12 col-12">
//           <!------Sldier----->

import { All_Products } from "./data/data.js";

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  return urlParams.get(name);
}

function initializeSingleProduct() {
  const top_single_view_product = document.querySelector(
    ".top-single-view-product"
  );
  const productId = getUrlParameter("productId");

  if (productId && All_Products !== "undefined") {
    let findProduct = All_Products.find((product) => product.id == productId);

    if (findProduct) {
      console.log(findProduct);
    }

    let top_view = `
          
        <div class="col-lg-5 col-md-12 col-12">
          <!------Sldier----->
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <!-- <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div> -->
            <div class="carousel-inner carousel-customize shadow-sm">
              <div class="carousel-item active" data-bs-interval="5000">
                <img
                  src="${findProduct.img[0].img}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item  data-bs-interval="5000">
                <img
                  src="${findProduct.img[1].img}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <!-- <span class="visually-hidden">Previous</span> -->
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <!-- <span class="visually-hidden">Next</span> -->
            </button>
          </div>

          <!----small-slider---->

          <div class="row p-0 m-0 mt-2 small-slider">
            <div
              class="col-2 small-product m-0 p-1 active"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              <div class="card">
                <img src=" ${findProduct.img[0].img} " alt="" />
                
              </div>
            </div>
            <div
              class="col-2 small-product m-0 p-1 active"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-current="true"
              aria-label="Slide 2"
            >
              <div class="card">
                <img src=" ${findProduct.img[1].img} " alt="" />
                
              </div>
            </div>

          </div>
        </div>
        <!--------detail about phone----->
        <div class="col-lg-7 col-md-12 col-12 detail-single-view">
          <div class="card border-0 p-4">
            <h4> ${findProduct.name} </h4>
            <p>
              ${findProduct.description}
            </p>

            <div class="block-qty d-flex align-items-center my-4">
              <h5 class="opacity-75">Quantity :  </h5>
              <div class="ps-2 qty-control ms-2">
                <button class=" decrement border-0 bg-secondary text-light">-</button>
                <input class="qty-input" type="text" value="1" readonly />
                <button class=" increment border-0 bg-success text-light">+</button>
              </div>
            </div>

            <div class="color-check d-flex align-items-center">
              <h5 class="opacity-75">Color :</h5>
              <div class="row p-0 m-0 ms-2">
                <div class="color col-lg-1 col-1 bg-${findProduct.color[0].color}"></div>
                <div class="color col-lg-1 col-1 bg-${findProduct.color[1].color}"></div>    
              </div>
            </div>

            <div class="brand d-flex align-items-center mt-3">
              <h5 class="opacity-75">Brand :</h5>
              <p class="ms-2 fw-bold mt-2"> ${findProduct.brand} </p>
            </div>
            <div class="Gategory d-flex align-items-center">
              <h5 class="opacity-75">Gategory :</h5>
              <p class="ms-2 fw-bold mt-2"> ${findProduct.category} </p>
            </div>

            <div class="add-to-card">
              <button class="btn btn-primary detail-add-cart">
                add to card
              </button>
            </div>
          </div>
        </div>
      

    `;

    top_single_view_product.innerHTML = top_view;
  }

  // ------------ qty control -------------
  const qtyInput = top_single_view_product.querySelector(".qty-input");
  let productFind = All_Products.find((product) => product.id == productId);
  const incrementBtn = top_single_view_product.querySelector(".increment");
  const decrementBtn = top_single_view_product.querySelector(".decrement");

  incrementBtn.addEventListener("click", () => {
    
    if (productFind.stock <= 0) {
      // incrementBtn.disabled = true;
      showAlert(productFind.name + "is out of stock", false);
      return; // exit the function if stock is 0
    } else if (productFind.stock <= parseInt(qtyInput.value)) {
      showAlert(
        productFind.name +
          " Has only " +
          productFind.stock +
          " ,left in stock.",
        false // on true or false to show alert bg color in Toastify (dak kr ban ot k ban depend on u)
      );

      return;
    } else {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    }
  });
  decrementBtn.addEventListener("click", () => {
    if (parseInt(qtyInput.value) > 1) {
      // if statement to prevent negative qty
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });
}

initializeSingleProduct();
