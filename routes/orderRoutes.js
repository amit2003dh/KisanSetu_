// Order Routes
const router = require("express").Router();
const Order = require("../models/Order");

router.post("/create", async (req,res)=>{
  const order = new Order(req.body);
  await order.save();
  res.send(order);
});

router.put("/:id/status", async (req,res)=>{
  await Order.findByIdAndUpdate(req.params.id,{status:req.body.status});
  res.send({success:true});
});

module.exports = router;
