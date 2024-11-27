const express = require("express");
const Product = require("../models/prodect.model");
const productRouter = express.Router();

// Fetch all products
productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Add a new product (Admin)
productRouter.post("/", async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error adding product" });
  }
});

// Delete a product (Admin)
productRouter.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting product" });
  }
});

module.exports = productRouter;
