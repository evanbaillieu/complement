const db = require("../models");
const Localisation = db.localisation;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const idMateriel = req.query.idMateriel;
    var condition = idMateriel ? { idMateriel: { [Op.like]: `%${idMateriel}%` } } : null;
  
    Localisation.findAll({ where: condition })
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
  
    Localisation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving" + id
        });
      });
  };

  exports.findByIdMateriel = (req, res) => {
    const idMateriel = req.params.id;

    Localisation.findOne({where: {
      idMateriel: idMateriel
    }})
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: "Error retrieving" +idMateriel
      })
    })
  }

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Localisation.update(req.body, {
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
  
    Localisation.destroy({
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
    Localisation.destroy({
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
  