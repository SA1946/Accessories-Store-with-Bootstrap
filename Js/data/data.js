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
        color: "danger",
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
        color: "danger",
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
        img: "./image/MSI KATANA 17 B13VGK-KH-2024.jpg",
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
        img: "./image/Vector 16 HX A14VHG.jpg",
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
        img: "./image/Vector 16 HX A14VHG.jpg",
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
        img: "./image/MSI KATANA 17 B13VGK-KH-2024.jpg",
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
        img: "./image/Vector 16 HX A14VHG.jpg",
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
        img: "./image/Carlington Elite Ladies.webp",
      },
    ],
    color: [
      {
        id: 1,
        color: "yellow",
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
    category: "Analog Watch",
    name: "Carlington Elite Ladies",
    brand: "Carlington",

    stock: 5,
    img: [
      {
        id: 1,
        img: "./image/Carlington Elite Ladies.webp",
      },
      {
        id: 2,
        img: "./image/Apple Watch Ultra 2 with Ocean Band.webp",
      },
    ],
    color: [
      {
        id: 1,
        color: "secondary",
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

export { categories, slides, All_Products };
