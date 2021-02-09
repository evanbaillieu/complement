const { authJwt } = require("../middleware");
const materiel = require("../controllers/materiel.controllers"); 
const router = require("express").Router();

router.get("/", [authJwt.verifyToken], materiel.findAll)

router.get("/:id", materiel.findOne)

router.post("/", materiel.create)

router.put("/:id", [authJwt.verifyToken], materiel.update)

router.delete("/:id", [authJwt.verifyToken], materiel.delete)



module.exports = router;