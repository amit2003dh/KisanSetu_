// Order Routes
const router = require("express").Router();
const Order = require("../models/Order");
const mongoose = require("mongoose");

router.post("/create", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: "Database not connected",
        message: "MongoDB is not connected. Please check your database connection."
      });
    }

    const order = new Order(req.body);
    await order.save();
    res.send(order);
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({
      error: "Failed to create order",
      message: error.message || "Failed to save order"
    });
  }
});

router.get("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: "Database not connected",
        message: "MongoDB is not connected. Please check your database connection."
      });
    }

    const orders = await Order.find().sort({ createdAt: -1 });
    res.send(orders);
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({
      error: "Failed to fetch orders",
      message: error.message || "Failed to retrieve orders"
    });
  }
});

router.put("/:id/status", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: "Database not connected",
        message: "MongoDB is not connected. Please check your database connection."
      });
    }

    await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.send({ success: true });
  } catch (error) {
    console.error("Update order status error:", error);
    res.status(500).json({
      error: "Failed to update order",
      message: error.message || "Failed to update order status"
    });
  }
});

module.exports = router;
