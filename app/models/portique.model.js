module.exports = (sequelize, Sequelize) => {
    const Portique = sequelize.define("portique", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            x: {
                type: Sequelize.FLOAT
            },
            y: {
                type: Sequelize.FLOAT
            },
            idSalle1: {
                type: Sequelize.INTEGER
            },
            idSAlle2: {
                type: Sequelize.INTEGER
            },
            idLecteur: {
                type: Sequelize.INTEGER
            }
        },{timestamps: false,tableName: 'portique'});
    return Portique;
  };