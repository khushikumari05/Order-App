const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyerName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  items: {type: Number, required: true}
  // [
  //   {
  //     productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  //     quantity: { type: Number, required: true },
  //   },
  // ],
  // status: { type: String, default: "Pending", enum: ["Pending", "In Progress", "Delivered"] },
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
