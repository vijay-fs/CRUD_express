const express = require("express");
const router = express.Router();
const alienSchema = require("../models/aliencontroller");
router.get("/", async (req, res) => {
  try {
    const aliens = await alienSchema.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const alien = await alienSchema.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const alien = await alienSchema.findById(req.params.id);
    alien.name = req.body.name;
    alien.tech = req.body.tech;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const alien = new alienSchema({
    name: req.body.name,
    tech: req.body.tech,
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
    console.log(a1);
  } catch (err) {
    res.send("Error");
  }
});
module.exports = router;
