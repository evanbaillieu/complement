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
    const date = new Date();
     //
    const dateControle = date.getFullYear() + "-"+ (date.getMonth() + 1) + "-" + date.getDay()
    const newDateControle = (date.getFullYear() + 1) + "-"+ (date.getMonth() + 1) + "-" + date.getDay()
    console.log(dateControle);
    console.log(newDateControle)
    // Create a Tutorial
    const materiel = {
      idBadge: req.body.idBadge,
      dateControle: dateControle,
      newDateControle: newDateControle,
      nomMateriel: req.body.nomMateriel,
      idType: req.body.idType
    };
    console.log(materiel);
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
    
    const date = new Date();
    const dateControle = date.getFullYear() + "-"+ (date.getMonth() + 1) + "-" + date.getDay()
    const newDateControle = (date.getFullYear() + 1) + "-"+ (date.getMonth() + 1) + "-" + date.getDay()
    console.log(dateControle);
    console.log(newDateControle)
    // Create a Tutorial
    const materiel = {
      idBadge: req.body.idBadge,
      dateControle: dateControle,
      newDateControle: newDateControle,
      nomMateriel: req.body.nomMateriel,
      idType: req.body.idType
    };
  
    Materiel.update(materiel, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Materiel was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Materiel with id=${id}. Maybe Materiel was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Materiel with id=" + id
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

 