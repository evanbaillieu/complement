const { authJwt } = require("../middleware");
const materiel = require("../controllers/materiel.controllers"); 
var router = require("express").Router();

router.get("/", materiel.findAll)

router.get("/:id", materiel.findOne)

router.post("/", materiel.create)

router.delete("/:id", materiel.delete)

router.delete("/", materiel.deleteAll)

module.exports = router;