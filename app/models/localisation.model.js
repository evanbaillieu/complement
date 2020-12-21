
module.exports = (sequelize, Sequelize) => {
    const Localisation = sequelize.define("localisation", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            idMateriel: {
              type: Sequelize.INTEGER,
            },
            idSalle: {
              type: Sequelize.INTEGER
            },
            sortie: {
                type: Sequelize.TINYINT
            }
        },{timestamps: false,tableName: 'localisation'});
    return Localisation;
  };