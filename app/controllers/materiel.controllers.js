const db = require("../models");
const Materiel = db.materiel;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nomMateriel) {
      res.status(400).send({
        message: "Conten can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const materiel = {
      idBadge: req.body.idBadge,
      dateControle: req.body.dateControle,
      newDateControle: req.body.newDateControle,
      nomMateriel: req.body.nomMateriel,
      idType: req.body.idType
    };
  
    // Save Tutorial in the database
    Materiel.create(materiel)
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
    const nomMateriel = req.query.nomMateriel;
    var condition = nomMateriel ? { nomMateriel: { [Op.like]: `%${nomMateriel}%` } } : null;
  
    Materiel.findAll({ where: condition })
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
  
    Materiel.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Materiel.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Materiel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Materiel.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Metrologue. were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Metrologue."
        });
      });
  };

  exports.findbynomMateriel = (req, res) => {
    const nomMateriel = req.params.nomMateriel

    Materiel.findOne({where: { nomMateriel: nomMateriel} })
    .then(materiel => {
        res.send(materiel)
    }).catch(err =>{
      res.status(500).send({
        message: err.message || "non trouver"
      })
    })
  }

 