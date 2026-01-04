const router = require("express").Router();
const razorpay = require("../config/razorpay");

router.post("/create-order", async (req,res)=>{
  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "kisansetu_order"
  };

  const order = await razorpay.orders.create(options);
  res.send(order);
});

module.exports = router;
