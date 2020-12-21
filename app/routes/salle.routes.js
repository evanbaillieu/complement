const { authJwt } = require("../middleware");
    
    const Salle = require("../controllers/salle.controllers");
  
    const router = require("express").Router();

    router.get("/", [authJwt.verifyToken], Salle.findAll);

    router.post("/", [authJwt.verifyToken], Salle.create);

    router.get("/:id", [authJwt.verifyToken], Salle.findOne);

module.exports = router;