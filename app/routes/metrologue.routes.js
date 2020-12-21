
    const { authJwt } = require("../middleware");
    
    const metrologue = require("../controllers/metrologue.controller.js");
  
    var router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken], metrologue.create);

    router.get("/", [authJwt.verifyToken], metrologue.findAll);

    router.get("/:id", [authJwt.verifyToken], metrologue.findOne);

    router.put("/:id", [authJwt.verifyToken], metrologue.update);
  
    router.delete("/:id", [authJwt.verifyToken], metrologue.delete); 

    router.delete("/", [authJwt.verifyToken], metrologue.deleteAll);
    
    module.exports = router;