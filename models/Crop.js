// Crop Model
const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  farmerId: mongoose.Schema.Types.ObjectId,
  name: String,
  quantity: Number,
  price: Number,
  harvestDate: Date,
  status: { type: String, default: "Available" }
});

module.exports = mongoose.model("Crop", cropSchema);
