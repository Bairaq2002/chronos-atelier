const express = require("express");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// GET product by ID
router.get("/:id", getProductById);

// POST create product
router.post("/", createProduct);

// PUT update product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;