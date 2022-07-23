const { Router } = require("express");
const controlSense = require("../controller/senses.controller");
const controlDevice = require("../controller/devices.controller");
const controlAuth = require("../controller/auth.controller")
const { validate } = require("../middleware/auth.mid")
const router = Router();

//Principal
router.get("/", (req, res) => {
  res.send("Welcome");
});

//Devices
router.get("/senses",validate, controlSense.get);
router.post("/senses",validate, controlSense.create);
router.put("/senses/:id",validate, controlSense.update);
router.delete("/senses/:id",validate, controlSense.deleted);

//Senses

router.get("/device", controlDevice.get);
router.post("/device", controlDevice.create);
router.put("/device/:id", controlDevice.update);
router.delete("/device/:id", controlDevice.deleted);

//Authentication
router.post("/login", controlAuth.login);

module.exports = router