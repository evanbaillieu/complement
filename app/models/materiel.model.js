module.exports = (sequelize, Sequelize) => {
    const Materiel = sequelize.define("materiel", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            idBadge: {
                type: Sequelize.STRING
            },
            dateControle: {
                type: Sequelize.DATE
            },
            newDateControle: {
                type: Sequelize.DATE
            },
            nomMateriel: {
                type: Sequelize.STRING
            },
            idType:{
                type: Sequelize.INTEGER
            }
        },{timestamps: false,tableName: 'materiel'});
    return Materiel;
  };