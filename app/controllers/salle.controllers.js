const db = require("../models");
const Salle = db.salle;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.login) {
      res.status(400).send({
        message: "Conten can not be empty!"
      });
      return;
    }
    
    // Create a Tutorial
    const salle = {
        id: null,
        x_ini: req.body.x_ini,
        Y_ini: req.body.Y_ini,
        x_fin: req.body.x_fin,
        Y_fin: req.body.Y_fin,
        numSalle: req.body.numSalle,
        nomSalle: req.body.nomSalle,
        nomAtelier: req.body.nomAtelier
    };
  
    // Save Tutorial in the database
    Salle.create(salle)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };


exports.findAll = (req, res) => {
    const nomSalle = req.query.nomSalle;
    var condition = nomSalle ? { nomSalle: { [Op.like]: `%${nomSalle}%` } } : null;
  
    Salle.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Salle.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };