const { authJwt } = require("../middleware");
const lecteur = require("../controllers/lecteur.controllers"); 
const router = require("express").Router();

router.get("/", [authJwt.verifyToken], lecteur.findAll)

router.get("/:id", lecteur.findOne)

router.post("/", lecteur.create)

module.exports = router;