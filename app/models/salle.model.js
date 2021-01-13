const db = require(".");


module.exports = (sequelize, Sequelize) => {
    const Salle = sequelize.define("salle", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            }
        },{timestamps: false,tableName: 'salle'});
    return Salle;
  };