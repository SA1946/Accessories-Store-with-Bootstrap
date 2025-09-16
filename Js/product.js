import { All_Products } from "./data/data.js";

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  return urlParams.get(name);
}

const productId = getUrlParameter("productId")?.toLowerCase();
console.log(productId);

// typeof return obj or anything else depend on those
if (productId && typeof All_Products !== "undefined") {
  const products = document.querySelector(".product");

  let productFind;

  const isAudienceType = All_Products.some(
    (product) => `${product.category}-${product.audience}` === productId
  );

  console.log("isAudienceType: " + isAudienceType);

  if (isAudienceType) {
    productFind = All_Products.filter(
      (product) => `${product.category}-${product.audience}` === productId
    );
  } else {
    productFind = All_Products.filter(
      (product) =>
        product.category && product.category.toLowerCase() == productId
    );
  }

  //productFind is array
  if (productFind.length > 0) {
    let productHtml = "";
    productFind.forEach((product) => {
      productHtml += `
        <div class="col-lg-4 col-md-6 col-6 my-2">
          <div class="card shadow-sm">
            <!------product image----->
            <img src="${product.img[0].img || ""}" alt="${product.name}" 
            onclick="window.location.href='./single-view-detail.html?productId=${
              product.id
            }'"

            />

            <!------product body---->
            <div class="card-body">
              <h5 class=" fs-6 " >${product.name}</h5>
              
              <div class="d-flex align-items-center gap-2">
              ${
                product.oldPrice
                  ? `<span class="text-decoration-line-through text-danger">$${product.oldPrice}</span>`
                  : ""
              }
                <span class=" fs-6  fw-bold ">$${product.newPrice}</span>
              </div>
              <div class="mt-2">
                <small class="text-muted">Stock: ${product.stock}</small>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    products.innerHTML = productHtml;
  } else {
    products.innerHTML =
      '<p class="text-center">No products found in this category.</p>';
  }
} else {
  console.error("Product ID not found or All_Products is undefined");
}
