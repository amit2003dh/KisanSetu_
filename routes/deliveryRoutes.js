// Delivery Routes
const router = require("express").Router();
const Delivery = require("../models/Delivery");

router.post("/assign", async (req,res)=>{
  const delivery = new Delivery(req.body);
  await delivery.save();
  res.send(delivery);
});

router.put("/location/:id", async (req,res)=>{
  await Delivery.findByIdAndUpdate(req.params.id,{
    currentLocation: req.body.location
  });
  res.send({success:true});
});

router.get("/location/:id", async (req,res)=>{
  const delivery = await Delivery.findById(req.params.id);
  const [lat,lng] = delivery.currentLocation.split(",");
  res.send({ lat: Number(lat), lng: Number(lng) });
});


module.exports = router;
