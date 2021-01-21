const db = require("../models");
const Batiment = db.batiment;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const nomBatiment = req.query.nomBatiment;
    var condition = nomBatiment ? { nomBatiment: { [Op.like]: `%${nomBatiment}%` } } : null;
  
    Batiment.findAll({ where: condition })
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