const db = require(".");


module.exports = (sequelize, Sequelize) => {
    const Salle = sequelize.define("salle", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            x_ini: {
              type: Sequelize.INTEGER
            },
            y_ini: {
              type: Sequelize.INTEGER
            },
            x_fin: {
              type: Sequelize.INTEGER
            },
            y_fin: {
              type: Sequelize.INTEGER
            },
            numSalle: {
              type: Sequelize.INTEGER
            },
            nomSalle: {
              type: Sequelize.STRING
            },
            nomAtelier: {
              type: Sequelize.STRING
            }
        },{timestamps: false,tableName: 'salle'});
    return Salle;
  };