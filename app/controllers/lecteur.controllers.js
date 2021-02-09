const db = require("../models");
const Lecteur = db.lecteur;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.ip) {
      res.status(400).send({
        message: "se n'est pas une ip"
      });
      return;
    }
    
    // Create a Tutorial
    const lecteur = {
      ip: req.body.ip,
      modele: req.body.modele,
      etatOn: req.body.etatOn,
    };
    console.log(lecteur);
    // Save Tutorial in the database
    Lecteur.create(lecteur)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
      });
  };


exports.findAll = (req, res) => {
    const ip = req.query.ip;
    var condition = ip ? { ip: { [Op.like]: `%${ip}%` } } : null;
  
    Lecteur.findAll({ where: condition })
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
  
    Lecteur.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving lecteur with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Lecteur.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "lecteur was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update lecteur with id=${id}. Maybe lecteur was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating lecteur with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Lecteur.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Lecteur was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Lecteur with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Lecteur with id=" + id
        });
      });
  };
