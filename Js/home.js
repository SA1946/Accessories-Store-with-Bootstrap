// --------- categories end ----------

// ----------- Slider start ------------
import showAlert from "./alert-toastify.js";
import { slides } from "./data/data.js";
import { All_Products } from "./data/data.js";

let carousel_inner = document.querySelector(".home-slide");
slides.map((value, index) => {
  let slideHtml = `
          <div class="carousel-item 
            ${index == 0 ? "active" : ""} 
            "data-bs-interval="${index == 0 ? "5000" : "3000"}
          ">
            <img src=" ${value.img} " class="d-block w-100" alt="..." />
          </div>
  `;
  carousel_inner.innerHTML += slideHtml;
});

// ------------ Slider end -------------

// ---------- Products start ------------

var products = document.querySelector(".products");
if (products) {
  All_Products.slice(0, 19).map((value) => {
    let productHtml = `
              <div 
                 data-aos="fade-up" 
                 data-aos-anchor-placement="top-center"
                  class="col-lg-3 col-md-4 col-md-4 col-6 my-2">
                <div class="card shadow-sm">  
                  <img 
                      onclick="product_model(${value.id})"
                      data-bs-toggle="modal"
                      data-bs-target="#view-product"
                      src="${value.img[0].img}" alt="" />
                  <div class="card-body ">
                    <h5>${value.name}</h5>
                    <del class="text-danger">$${value.oldPrice}</del>
                    <span class="text-black fw-bold">$${value.newPrice}</span>
                  </div>
                  <div class="detail d-flex justify-content-center">
                    <i onclick="heart(${value.id})" class="bi bi-heart"></i>
                    <i 
                      onclick="product_model(${value.id})"
                      data-bs-toggle="modal"
                      data-bs-target="#view-product"
                    class="bi bi-search"></i> 
                    <i class="bi bi-cart-plus add-to-card"></i>
                  </div>
                </div>
              </div>
      `;
    products.innerHTML += productHtml;
  });
}

// ----------------- heart function ------------------
function heart(id) {
  showAlert("Love Love");
}
// -------------------------------------------------------------

//-------------------Product modal function-----------------
const product_model = (id) => {
  // Show the modal
  let single_product = document.querySelector(".single-product");
  let productFind = All_Products.find((product) => product.id === id);

  if (!productFind) {
    single_product.innerHTML =
      "<p class='text-center py-4'>Product not found!</p>";
    return;
  }

  let descriptionHTML = `
      ${productFind.name} for sell
      <del class="text-danger">$${productFind.oldPrice}</del>, but now
      <span class="text-black fs-6 fw-bold">$${productFind.newPrice}</span>
      ${productFind.description}
    `;

  const maxLength = 120;
  // If description is long it add "More" button(a)
  if (productFind.description.length > maxLength) {
    const shortDescription =
      productFind.description.substring(0, maxLength) + "...";
    // The substring() method does not change the original string (w3school)
    descriptionHTML = `
      ${productFind.name} for sell
      <del class="text-danger">$${productFind.oldPrice}</del>, but now
      <span class="text-black fs-6 fw-bold">$${productFind.newPrice}</span>
      ${shortDescription}
      <a href="#" class="show-more-link" style="color: blue; cursor: pointer; margin-left: 5px;">More</a>
    `;
  }

  single_product.innerHTML = `
    <div class="row p-0 m-0">
      <div class="col-lg-6 col-md-6 col-sm-6 modal-left bg-back">
        <img class="img-modal" src="${productFind.img[0].img}" alt="" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 model-right d-flex flex-column">
        <div>
          <h4>${productFind.name}</h4>
          <p class="product-description">${descriptionHTML}</p>
        </div>

        <div class="mb-auto">
          <div class="qty-control my-4">
            <button class="decrement border-0 bg-secondary text-light">-</button>
            <input type="text" class="qty-input" value="1" min="1" readonly />
            <button class="increment border-0 bg-success text-light">+</button>
          </div>

          <button class="btn btn-primary add-to-card">
            Add to Card
          </button>

          <div class=" mt-2">
            <a href="./single-view-detail.html?productId=${productFind.id} " class="text-black view-detail text-decoration-underline" data-product-id="${productFind.id}">
              view product detail
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // // Add event listener for "More" links if they exist
  const moreLinks = single_product.querySelectorAll(".show-more-link");
  moreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior (kom oy refresh)
      const descriptionPara = this.parentElement;
      //(this) refers to: The clicked <a> ("More") element itself
      // (.parentElement) means: "Get the direct parent of this element"
      // If this is the <a> tag, its parent is the <p> containing it
      const fullDescription = `
        ${productFind.name} for sell
        <del class="text-danger">$${productFind.oldPrice}</del>, but now
        <span class="text-black fs-6 fw-bold">$${productFind.newPrice}</span>
        ${productFind.description}
      `;
      descriptionPara.innerHTML = fullDescription;
    });
  });

  // ------------ qty control -------------
  const qtyInput = single_product.querySelector(".qty-input");
  // use document or single_product, but only in function product_model
  //cuz tag html in js function product_model()
  const incrementBtn = document.querySelector(".increment");
  const decrementBtn = document.querySelector(".decrement");

  incrementBtn.addEventListener("click", () => {
    // check if the product is out of stock
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
  // ----------------- more method for qty control -------------
  // tea trv add onclick="incrementtest(this)" on btn
  // const incrementtest = (e) => {
  //   let parent = e.parentElement; //refer to the parent of the button
  //   let input = parent.querySelector(".qty-input");
  //   if (input) {
  //     input.value = parseInt(input.value) + 1;
  //   }
  // };
  // ---------------------------------------------

  document.querySelectorAll(".add-to-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (!checkIfProductExist()) return;

      productFind.itemCardQty = parseInt(qtyInput.value); // Add qty to productFind object (to offcanvas-Right)

      itemCards.push(productFind); // Add to array
      localStorage.setItem("card", JSON.stringify(itemCards)); // Save updated array

      showAlert(productFind.name + " has been added to your card.", true);
      //----close modal with Jquery----
      $("#view-product").modal("hide");
      // ------------------------------

      renderCard();
    });
  });

  // Make it global:
  // window.removeProducts = removeProducts;
  //check if product is already added to card
  function checkIfProductExist() {
    let productExist = itemCards.find((product) => product.id == id);
    if (productExist) {
      showAlert(productFind.name + " is already add to your card.", false);
      return false;
    } else {
      return true;
    }
  }
};

// ---------------Add to card ------------------
let itemCards = JSON.parse(localStorage.getItem("card")) || [];
// used var cuz it can reassign value (let and const can't reassign value)
console.log(itemCards);
const renderCard = () => {
  let Cards = document.querySelector(".card-item-list");
  let cardHtml = ``;
  itemCards = JSON.parse(localStorage.getItem("card")) || [];
  itemCards.map((item) => {
    cardHtml += `
          <div
            class="card-item d-flex justify-content-between align-items-center mb-2"
          >
            <img src="${item.img[0].img} "/>
            <p class="badge bg-secondary">$${
              item.newPrice * item.itemCardQty
            } </p>
            <p> ${item.itemCardQty} </p>
            <button onclick="removeProducts(${
              item.id
            })" class="btn btn-sm btn-danger ">Remove</button>
          </div>
      `;
  });
  Cards.innerHTML = cardHtml;
};
// remove item from card function
const removeProducts = (id) => {
  const removedItem = itemCards.find((product) => product.id == id);
  if (confirm("Do you really want remove this product ?")) {
    itemCards = itemCards.filter((product) => product.id != id);
    localStorage.setItem("card", JSON.stringify(itemCards));

    if (removedItem) {
      showAlert(removedItem.name + " Delete success", false);
    }

    // check if the product is out of offcanvas
    if (itemCards.length == 0) {
      $(".offcanvas").offcanvas("hide");
    }

    renderCard();
  }
};
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
});

// ---------- Products end ------------
window.product_model = product_model;
window.removeProducts = removeProducts;
window.heart = heart;
