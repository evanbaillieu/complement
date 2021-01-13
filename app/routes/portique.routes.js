const { authJwt } = require("../middleware");
    
    const Portique = require("../controllers/portique.controllers");
  
    const router = require("express").Router();

    router.get("/", [authJwt.verifyToken], Portique.findAll);

    router.post("/", [authJwt.verifyToken], Portique.create);

    router.get("/:id", [authJwt.verifyToken], Portique.findOne);

module.exports = router;