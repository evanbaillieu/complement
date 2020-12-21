
    
    const { authJwt } = require("../middleware");
    const tutorials = require("../controllers/tutorial.controller.js");
  
    const router = require("express").Router();
    
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", [authJwt.verifyToken], tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", [authJwt.verifyToken], tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", [authJwt.verifyToken], tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", [authJwt.verifyToken], tutorials.deleteAll);

    module.exports = router;