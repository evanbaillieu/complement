const { authJwt } = require("../middleware");
const type = require("../controllers/type.controllers"); 
var router = require("express").Router();

router.get("/", [authJwt.verifyToken], type.findAll)

router.get("/:id", type.findOne)

router.post("/", [authJwt.verifyToken], type.create)

router.put("/:id", [authJwt.verifyToken], type.update)

router.delete("/:id", type.delete)

router.delete("/", type.deleteAll)


module.exports = router;