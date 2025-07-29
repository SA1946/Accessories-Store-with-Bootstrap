// ------- categories start -------- with navbar

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

var category_block = document.querySelector(".categories-block");
categories.map((category, index) => {
  if (category.types) {
    let dropdown_menu = ``;
    dropdown_menu += `
        <li class="nav-item dropdown">
                <a
                    class="nav-link text-light dropdown-toggle"
                    href="./product.html"
                    role="button"
                    aria-expanded="false"
                >
                    ${category.name}
                 </a>
            <ul class="dropdown-menu">`;

    category.types.map((type) => {
      dropdown_menu += `
                <li><a class="dropdown-item" href="./product.html">${type.name} </a></li>
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
                <a class="nav-link text-light" href="./product.html"> ${category.name} </a>
            </li>
    `;

    category_block.innerHTML += menu;
  }
});

// --------- categories end ----------

// ----------- Slider start ------------
const slides = [
  {
    id: 1,
    name: "watch",
    img: "./image/watch1.jpg",
  },
  {
    id: 2,
    name: "watch_for_women",
    img: "./image/watch-for-women1.webp",
  },
  {
    id: 3,
    name: "computer",
    img: "./image/computer-img.jpg",
  },
  {
    id: 4,
    name: "clothes",
    img: "./image/clothes-img.jpg",
  },
];

var carousel_inner = document.querySelector(".carousel-inner");
slides.map((value, index) => {
  let slideHtml = ``;
  slideHtml += `
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

const All_Products = [
  {
    id: 1,
    category: "phone",
    name: "Iphone 16 Plus Silicone Case",
    brand: "Apple",
    stock: 1,
    img: [
      {
        id: 1,
        img: "./image/iphone16 plus-Silicone-case-wth-Magesafe.png",
      },
      {
        id: 2,
        img: "./image/iphone16plus.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1400,
    newPrice: 999,
    description:
      "Thin, light, and easy to grip — this Apple-designed caseshows off the brilliant colored finish of iPhone 16 Plus while providing extra protection, Crafted with a blend of optically clear polycarbonate and flexible materials.",
  },
  {
    id: 2,
    category: "ipad",
    name: "Smart Folio for iPad Mini7",
    brand: "Apple",
    stock: 10,
    img: [
      {
        id: 1,
        img: "./image/Smart-Folio-for-iPade_Mini7.png",
      },
      {
        id: 2,
        img: "./image/iphone16plus.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1000,
    newPrice: 899,
    description:
      "The Smart Folio for iPad mini is thin and light and offers front and back protection for your device.It automatically wakes your iPad when opened and puts it to sleep when closed. The Smart Folio attaches magnetically.",
  },
  {
    id: 3,
    category: "phone",
    name: "Tecno Spark 30C",
    brand: "Tecno",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/Tecno Spark 30C.png",
      },
      {
        id: 2,
        img: "./image/iphone16plus.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1600,
    newPrice: 1199,
    description:
      "Tecno Spark 30C is a smartphone that comes with a 6.6-inch touchscreen display with a resolution of 720x1612 pixels and an aspect ratio of 20:9. The phone is powered by a 1.6GHz octa-core MediaTek Helio G85 processor.",
  },
  {
    id: 4,
    category: "phone",
    name: "iphone16plus",
    brand: "apple",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/iphone16plus.png",
      },
      {
        id: 2,
        img: "./image/iphone16plus.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1300,
    newPrice: 899,
    description:
      "Thin, light, and easy to grip — this Apple-designed case shows off the brilliant colored finish of iPhone 16 Plus while providing extra protection.",
  },
  {
    id: 5,
    category: "phone",
    name: "vivo V40 Lite",
    brand: "vivo",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/vivo V40 Lite.png",
      },
      {
        id: 2,
        img: "./image/iphone16plus.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1300,
    newPrice: 899,
    description:
      "The innovative touch technology keeps the screen responsive in wet conditions, with IP64 water and dust resistance.",
  },
  {
    id: 6,
    category: "phone",
    name: "iPhone 16e",
    brand: "apple",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/iPhone 16e.png",
      },
      {
        id: 2,
        img: "./image/iPhone 16e-white.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 999,
    newPrice: 899,
    description:
      "iPhone 16e has an incredible design — inside and out — and is available in an elegant black or white finish. Made from durable aerospace‑grade aluminum, the enclosure on iPhone 16e is built to go the distance and survive life’s oops, whoops, and oh nooos.",
  },
  {
    id: 7,
    category: "phone",
    name: "iPhone 16 Pro Max",
    brand: "apple",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/iPhone 16 Pro Max-Black.png",
      },
      {
        id: 2,
        img: "./image/iPhone 16 Pro Max-Titanium.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "titanium",
      },
    ],
    oldPrice: 1200,
    newPrice: 1099,
    description:
      "iPhone 16 Pro is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly.With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple. ",
  },
  {
    id: 8,
    category: "phone",
    name: "iPhone 16 Pro",
    brand: "apple",
    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/iPhone 16 Pro-Titanium.png",
      },
      {
        id: 2,
        img: "./image/iPhone 16 Pro-Black.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "titanium",
      },
      {
        id: 2,
        color: "black",
      },
    ],
    oldPrice: 1200,
    newPrice: 1099,
    description:
      "iPhone 16 Pro is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly.With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple. ",
  },
  {
    id: 9,
    category: "computer",
    name: "ROG Strix G18 G814JU- Green 2025",
    brand: "asus",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/ROG Strix G18 G814JU- Green 2025.jpg",
      },
      {
        id: 2,
        img: "./image/Oppo Reno13 F-Purple.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1549,
    newPrice: 1399,
    description:
      "CPU : Intel Core i7 13650HX UP TO 5.3GHz, RAM : 16GB DDR5 4800MH Origina, SDD : PCIE 512GB Original, Screen : 18.0'QHD (2560x1440), Refresh Rate 240Hz, VGA 2 : NVIDIA RTX  4050-6GB, RGB Lighting/ KeyBoard, Laptop is Original Box Company​​​​ +2Years Warranty ",
  },
  {
    id: 10,
    category: "computer",
    name: "ASUS TUF FA401WV- 2025",
    brand: "asus",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/ASUS TUF FA401WV- 2025.jpg",
      },
      {
        id: 2,
        img: "./image/Oppo A5 Pro​ (2025)-Brown.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "brown",
      },
    ],
    oldPrice: 1649,
    newPrice: 1599,
    description:
      " CPU : AMD RYZEN AI 9 HX 370, RAM : 32GB DDR5  Original, SDD : PCIE 1TB Original, Screen : 14' 2.5K (2560x1600), Refresh Rate 165Hz, VGA  : NVIDIA RTX 4060 8GB, RGB Lighting/ KeyBoard, Laptop is Original Box Company​​​​ +2Years Warranty",
  },
  {
    id: 11,
    category: "computer",
    name: "MSI KATANA 17 B13VGK-KH-2024",
    brand: "msi",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/MSI KATANA 17 B13VGK-KH-2024.jpg",
      },
      {
        id: 2,
        img: "./image/Oppo A60-Midnight.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 1599,
    newPrice: 1399,
    description:
      " CPU : Intel Core i7 13620H UP TO 5.2GHz, RAM : 16GB DDR5 4800MH Original, SDD : PCIE 1TB GEN4 Original, Screen : 17.3 'FHD IPS LEVEL , Refresh Rate 144Hz, VGA 2 : NVIDIA RTX 4070-8GB, RGB Lighting / 4ZONE , OS win 11 License, Laptop is Original Box Company​​​​ +2Years Warranty",
  },
  {
    id: 12,
    category: "computer",
    name: "Vector 16 HX A14VHG",
    brand: "msi",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/Vector 16 HX A14VHG.jpg",
      },
      {
        id: 2,
        img: "./image/Oppo A60-Midnight.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "black",
      },
      {
        id: 2,
        color: "white",
      },
    ],
    oldPrice: 2599,
    newPrice: 2499,
    description:
      "  CPU : Intel® Core™ i9-14900HX Processor, RAM : 16GB DDR5 4800MH Original, SDD : PCIE 1TB GEN4 Original, Screen :16' 16:10 QHD+, Refresh Rate 240Hz, VGA 2 : NVIDIA RTX 4080- 12GB, RGB Lighting / perKey , OS win 11 License, Laptop is Original Box Company​​, Laptop is Original Box Company​​​​ +2Years Warranty",
  },
  {
    id: 13,
    category: "computer",
    name: "MACBOOK PRO 16.2'INCH/M3 PRO/18GB/512GB",
    brand: "apple",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/MACBOOK PRO 16.2INCH.png",
      },
      {
        id: 2,
        img: "./image/Oppo A3x-Nebula Red.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "white",
      },
      {
        id: 2,
        color: "black",
      },
    ],
    oldPrice: 2499,
    newPrice: 2399,
    description:
      "CPU: M3 PRO Chip 12c CPU & 18c GPU, Display: 16.2'inch liquid retina XDR, Storage: 512GB, Ram: 18GB, 1 Year Warranty",
  },
  {
    id: 14,
    category: "iwatch",
    name: "Apple Watch Ultra 2 with Ocean Band",
    brand: "apple",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/Apple Watch Ultra 2 with Ocean Band.webp",
      },
      {
        id: 2,
        img: "./image/Oppo A3x-Nebula Red.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "gold",
      },
      {
        id: 2,
        color: "black",
      },
    ],
    oldPrice: 1.053,
    newPrice: 999,
    description:
      "The most rugged and capable Apple Watch. Designed for outdoor adventures and supercharged workouts with a lightweight titanium case, extra-long battery life and the brightest-ever display. Featuring double tap, a magical way to interact with Apple Watch, and Precision Finding to guide you to your iPhone.",
  },
  {
    id: 15,
    category: "Analog Watch ",
    name: "Carlington Elite Ladies",
    brand: "apple",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/Carlington Elite Ladies.webp",
      },
      {
        id: 2,
        img: "./image/Oppo A3x-Nebula Red.png",
      },
    ],
    color: [
      {
        id: 1,
        color: "Rosegold",
      },
      {
        id: 2,
        color: "black",
      },
    ],
    oldPrice: 58.57,
    newPrice: 11.71,
    description:
      "Carlington Elite's CT2007 watch is a stylish accessory for any woman. Featuring a self-adjustable mesh strap and 10 ATM water-resistant construction, this watch is perfect for everyday wear and offers superior reliability. With its classic analog design, this watch is sure to turn heads.",
  },
];

var products = document.querySelector(".products");
All_Products.slice(0, 15).map((value) => {
  productHtml = ``;
  productHtml += `
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
// ----------------- heart function ------------------
function heart(id) {
  showAlert("Love Love");
}

//---------------Alert message with Toastify-------------------
function showAlert(name, stock) {
  Toastify({
    text: " " + name,
    duration: 1500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: ` ${
        stock == true
          ? "green"
          : "linear-gradient(90deg,rgba(180, 58, 160, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)"
      } `,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
// -------------------------------------------------------------

//-------------------Product modal function-----------------
const product_model = (id) => {
  // Show the modal

  let single_product = document.querySelector(".single-product");
  let productFind = All_Products.find((product) => product.id == id);

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
      <a href="#" class=" show-more-link" style="color: blue; cursor: pointer; margin-left: 5px;">More</a>
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
            <a href="" class="text-black view-detail text-decoration-underline" data-product-id="${productFind.id}">
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
            <p class="badge bg-secondary">$${item.newPrice} </p>
            <p> ${item.itemCardQty} </p>
            <button onclick="removeProducts(${item.id})" class="btn btn-sm btn-danger ">Remove</button>
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
