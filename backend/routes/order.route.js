const express = require("express");
const Order = require("../models/order.model");
const orderRouter = express.Router();

// Place a new order
orderRouter.post("/", async (req, res) => {
  const { buyerName, contactInfo, address, items } = req.body;
  try {
    const newOrder = new Order({ buyerName, contactInfo, address, items });
    await newOrder.save();
    res.status(201).json({message:"Your order is placed"});
  } catch (error) {
    res.status(500).json({ message: "Error Occured during placing order" });
  }
});

// Get all orders (Admin)
orderRouter.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items.productId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error",error });
  }
});

// Update order status (Admin)
orderRouter.put("/:id", async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: "Error updating order status" });
  }
});

module.exports = orderRouter;
