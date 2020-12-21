const db = require("../models");
const Batiment = db.batiment;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const nomBatiment = req.query.nomBatiment;
    var condition = nomBatiment ? { nomBatiment: { [Op.like]: `%${login}%` } } : null;
  
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
exports.findOne = (req, res) => {
    const id = req.params.id;

    Batiment.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "n'a pas ete trouver"
        })
    })
}
exports.create = (req, res) => {
    if(!req.body.nomBatiment){
        res.status(400).send({
            message: "votre batiment existe deja"
        })
    }

    const batiment = {
        nomBatiment: req.body.nomBatiment,
        plan: req.body.plan
    }

    Batiment.create(batiment)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "n'a pas pue etre cree"
            })
        })
}
