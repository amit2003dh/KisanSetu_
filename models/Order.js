// Order Model
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerId: mongoose.Schema.Types.ObjectId,
  itemId: mongoose.Schema.Types.ObjectId,
  itemType: { type: String, enum: ["crop","product"] },
  quantity: Number,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Order", orderSchema);
