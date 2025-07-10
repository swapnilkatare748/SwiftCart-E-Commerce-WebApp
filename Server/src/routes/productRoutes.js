const {authMiddleware} = require('../middlewares/commonMiddleware');
const upload = require("../middlewares/multer");


const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productsContollers/productsControllers");

const router = express.Router();

// http://localhost:8080/product/

router.post("/", authMiddleware, upload.array("images", 5), addProduct); 
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, upload.array("images", 5), updateProduct);
router.delete("/:id",authMiddleware, deleteProduct);

module.exports = router;
