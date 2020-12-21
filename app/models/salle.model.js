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
              type: Sequelize.FLOAT
            },
            Y_ini: {
              type: Sequelize.FLOAT
            },
            x_fin: {
                type: Sequelize.FLOAT
            },
            Y_fin: {
                type: Sequelize.FLOAT
            },
            numSalle:{
              type: Sequelize.INTEGER
            },
            nomSalle:{
                type: Sequelize.STRING
            },
            nomAtelier: {
                type: Sequelize.STRING
            }
        },{timestamps: false,tableName: 'salle'});
    return Salle;
  };