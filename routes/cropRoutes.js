// Crop Routes
const router = require("express").Router();
const Crop = require("../models/Crop");

router.post("/add", async (req,res)=>{
  const crop = new Crop(req.body);
  await crop.save();
  res.send(crop);
});

router.get("/", async (req,res)=>{
  const crops = await Crop.find();
  res.send(crops);
});

module.exports = router;
