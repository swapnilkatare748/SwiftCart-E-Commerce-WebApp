import img from "../assets/Home/Mobiles/mobile..avif";
import {SmallCardimg,LaptopImages} from "../assets/image.js";



const MobileProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    brand: "Apple",
    category: "Mobile",
    price: 999,
    images: [
      SmallCardimg[2],
      "https://example.com/iphone14pro-2.jpg"
    ],
    description: "6.1-inch Super Retina XDR display, A16 Bionic chip, 48MP camera, iOS 16",
    stock: 10,
    rating: 4.8,
    specifications: {
      ram: "6GB",
      storage: "128GB",
      battery: "3200mAh",
      display: "6.1-inch OLED",
      processor: "A16 Bionic",
      os: "iOS 16"
    },
    features: ["ProMotion 120Hz", "Face ID", "MagSafe"]
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "Mobile",
    price: 1199,
    images: [
      SmallCardimg[6],
      "https://example.com/galaxys23ultra-2.jpg"
    ],
    description: "6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 200MP camera, One UI",
    stock: 15,
    rating: 4.7,
    specifications: {
      ram: "12GB",
      storage: "256GB",
      battery: "5000mAh",
      display: "6.8-inch AMOLED",
      processor: "Snapdragon 8 Gen 2",
      os: "Android 13"
    },
    features: ["S-Pen", "120Hz Display", "Wireless Charging"]
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    brand: "Google",
    category: "Mobile",
    price: 899,
    images: [
      SmallCardimg[3],
      "https://example.com/pixel7pro-2.jpg"
    ],
    description: "6.7-inch OLED, Google Tensor G2, 50MP camera, Android 13",
    stock: 8,
    rating: 4.6,
    specifications: {
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      display: "6.7-inch OLED",
      processor: "Google Tensor G2",
      os: "Android 13"
    },
    features: ["Titan M2 Security", "Magic Eraser", "Pure Android Experience"]
  },
  {
    id: 4,
    name: "OnePlus 11",
    brand: "OnePlus",
    category: "Mobile",
    price: 799,
    images: [
      SmallCardimg[4],
      "https://example.com/oneplus11-2.jpg"
    ],
    description: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 50MP camera, OxygenOS",
    stock: 12,
    rating: 4.5,
    specifications: {
      ram: "16GB",
      storage: "256GB",
      battery: "5000mAh",
      display: "6.7-inch AMOLED",
      processor: "Snapdragon 8 Gen 2",
      os: "OxygenOS 13"
    },
    features: ["SuperVOOC Charging", "Hasselblad Camera", "120Hz Display"]
  }
];

const LaptopProducts = [
  {
    id: 101,
    name: "MacBook Pro 16",
    brand: "Apple",
    category: "Laptop",
    price: 2499,
    images: [
      LaptopImages[1],
      "https://example.com/macbookpro16-2.jpg"
    ],
    description: "16-inch Liquid Retina XDR, M2 Pro chip, macOS Ventura",
    stock: 5,
    rating: 4.9,
    specifications: {
      ram: "16GB",
      storage: "512GB SSD",
      battery: "100Wh",
      display: "16-inch Retina",
      processor: "Apple M2 Pro",
      os: "macOS Ventura"
    },
    features: ["Touch ID", "ProMotion 120Hz", "Thunderbolt 4"]
  },
  {
    id: 102,
    name: "Dell XPS 15",
    brand: "Dell",
    category: "Laptop",
    price: 1899,
    images: [
      LaptopImages[2],
      "https://example.com/dellxps15-2.jpg"
    ],
    description: "15.6-inch OLED, Intel Core i9, Windows 11",
    stock: 8,
    rating: 4.7,
    specifications: {
      ram: "16GB",
      storage: "1TB SSD",
      battery: "86Wh",
      display: "15.6-inch OLED",
      processor: "Intel Core i9-13900H",
      os: "Windows 11"
    },
    features: ["InfinityEdge Display", "Carbon Fiber Design", "Thunderbolt 4"]
  },
  {
    id: 103,
    name: "Asus ROG Zephyrus G14",
    brand: "Asus",
    category: "Laptop",
    price: 1599,
    images: [
      LaptopImages[1],
      "https://example.com/asusrog14-2.jpg"
    ],
    description: "14-inch QHD, AMD Ryzen 9, RTX 4060, Windows 11",
    stock: 10,
    rating: 4.8,
    specifications: {
      ram: "16GB",
      storage: "1TB SSD",
      battery: "76Wh",
      display: "14-inch QHD 165Hz",
      processor: "AMD Ryzen 9 6900HS",
      os: "Windows 11"
    },
    features: ["AniMe Matrix Display", "MUX Switch", "Ultra-Thin Design"]
  },
  {
    id: 104,
    name: "HP Spectre x360",
    brand: "HP",
    category: "Laptop",
    price: 1399,
    images: [
      LaptopImages[0],
      "https://example.com/hpspectrex360-2.jpg"
    ],
    description: "13.5-inch OLED, Intel Core i7, 2-in-1 Convertible",
    stock: 7,
    rating: 4.6,
    specifications: {
      ram: "16GB",
      storage: "512GB SSD",
      battery: "66Wh",
      display: "13.5-inch OLED Touch",
      processor: "Intel Core i7-1260P",
      os: "Windows 11"
    },
    features: ["2-in-1 Convertible", "Stylus Support", "OLED Touchscreen"]
  }
];

export { MobileProducts, LaptopProducts };
