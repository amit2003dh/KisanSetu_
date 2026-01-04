// User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  role: {
    type: String,
    enum: ["farmer","buyer","seller","delivery","admin"]
  },
  location: String
});

module.exports = mongoose.model("User", userSchema);
