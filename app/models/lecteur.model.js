module.exports = (sequelize, Sequelize) => {
    const Lecteur = sequelize.define("lecteur", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            ip: {
              type: Sequelize.STRING,
            },
            modele: {
              type: Sequelize.STRING
            },
            etatOn:{
              type: Sequelize.TINYINT
            }
        },{timestamps: false,tableName: 'lecteur'});
    return Lecteur;
  };