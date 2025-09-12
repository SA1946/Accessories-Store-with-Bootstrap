document.addEventListener("click", function (event) {
  if (event.target.classList.contains("view-detail")) {
    event.preventDefault();
    // event.stopPropagation(); // Prevent the product_model from being called
    const productId = event.target.getAttribute("data-product-id");
    showproductDetail(productId);
    console.log(productId);
    //----close modal with Jquery----
    $("#view-product").modal("hide");
  }
});
function showproductDetail(productId) {
  let productFind = All_Products.find((product) => product.id == productId);
  if (!productFind) return;
  console.log(productFind);
  //   hide the maincontainer
  const mainContainer = document.querySelector(".container");
  mainContainer.classList.add("d-none");
  //   show the product detail container
  let container2 = document.querySelector(".for-container-height");
  if (!container2) {
    // container2 = document.createElement("div");
    // container2.className = "container mt-3";
    container2.classList.add("for-container-height , container mt-3");
  }
  container2.innerHTML = `
            <div class="row m-0 p-0">
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
                  src="../image/iphone16plus.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src="../image/Smart-Folio-for-iPade_Mini7.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src="../image/iphone16 plus-Silicone-case-wth-Magesafe.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img
                  src="../image/vivo V40 Lite.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../image/Tecno Spark 30C.png"
                  class="d-block w-100"
                  alt="..."
                />
                <!-- <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div> -->
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
                <img src="../image/iphone16plus.png" alt="" />
              </div>
            </div>
            <div
              class="col-2 small-product m-0 p-1"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <div class="card">
                <img src="../image/Smart-Folio-for-iPade_Mini7.png" alt="" />
              </div>
            </div>
            <div
              class="col-2 small-product m-0 p-1"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <div class="card">
                <img
                  src="../image/iphone16 plus-Silicone-case-wth-Magesafe.png"
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-2 small-product m-0 p-1"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            >
              <div class="card">
                <img src="../image/vivo V40 Lite.png" alt="" />
              </div>
            </div>
            <div
              class="col-2 small-product m-0 p-1"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            >
              <div class="card">
                <img src="../image/Tecno Spark 30C.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!--------detail about phone----->
        <div class="col-lg-7 col-md-12 col-12 detail-single-view">
          <div class="card border-0 p-4">
            <h4>Iphone 16 Plus clear case with Magsafe</h4>
            <p>
              Phone 16 Plus Clear Case with MagSafe for sell
              <del class="badge bg-secondary">1600$</del> , but now
              <span class="badge bg-success">1200$</span>
              Thin, light, and easy to grip — this Apple-designed case shows off
              the brilliant colored finish of iPhone 16 Plus while providing
              extra protection, Crafted with a blend of optically clear
              polycarbonate and flexible materials. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Distinctio magnam debitis omnis.
              Quae amet nam iure magnam a tenetur cumque voluptate, culpa nemo,
              labore harum fugiat cupiditate dicta sed distinctio ut eveniet
              iusto! Dolorem reprehenderit minus sint, voluptate vero
              consequatur.
            </p>

            <div class="block-qty d-flex align-items-center my-4">
              <h5 class="opacity-75">Quantity :</h5>
              <div class="ps-2 qty-control ms-2">
                <button class="border-0 bg-secondary text-light">-</button>
                <input type="text" value="1" readonly />
                <button class="border-0 bg-success text-light">+</button>
              </div>
            </div>

            <div class="color-check d-flex align-items-center">
              <h5 class="opacity-75">Color :</h5>
              <div class="row p-0 m-0 ms-2">
                <div class="color col-lg-1 col-1 bg-black"></div>
                <div class="color col-lg-1 col-1 bg-secondary"></div>
                <div class="color col-lg-1 col-1 bg-danger"></div>
                <div
                  style="background-color: bisque"
                  class="color col-lg-1 col-1"
                ></div>
              </div>
            </div>

            <div class="brand d-flex align-items-center mt-3">
              <h5 class="opacity-75">Brand :</h5>
              <p class="ms-2 fw-bold mt-2">I love U Mauh Muah 😂</p>
            </div>
            <div class="Gategory d-flex align-items-center">
              <h5 class="opacity-75">Gategory :</h5>
              <p class="ms-2 fw-bold mt-2">Phone</p>
            </div>

            <div class="add-to-card">
              <button class="btn btn-primary detail-add-cart">
                add to card
              </button>
            </div>
          </div>
        </div>
      </div>
  `;

  // alert("Tver ot torn hx te😭😭");
}
