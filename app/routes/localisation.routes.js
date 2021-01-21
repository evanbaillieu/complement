const { authJwt } = require("../middleware");
const localisation = require("../controllers/localisation.controllers"); 
const router = require("express").Router();

router.get("/", [authJwt.verifyToken], localisation.findAll)

router.get("/:id", localisation.findOne)

router.delete("/:id", localisation.delete)

router.delete("/", localisation.deleteAll)

router.get("/idMateriel/:id", localisation.findByIdMateriel)


module.exports = router