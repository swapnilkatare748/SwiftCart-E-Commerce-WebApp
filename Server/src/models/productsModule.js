const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }], 
  description: { type: String },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  specifications: { type: Map, of: String }, 
  features: [{ type: String }]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
