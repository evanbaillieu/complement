const { authJwt } = require("../middleware");
    
    const batiment = require("../controllers/batiment.controllers");
  
    var router = require("express").Router();

router.get("/", [authJwt.verifyToken], batiment.findAll);

router.get("/:id", batiment.findOne);

router.post("/", batiment.create)


module.exports = router;

