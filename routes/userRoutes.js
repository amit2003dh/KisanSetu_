// User Routes
const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

module.exports = router;
