module.exports = (sequelize, Sequelize) => {
    const Batiment = sequelize.define("batiment", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            nomBatiment: {
              type: Sequelize.STRING,
            },
            plan: {
              type: Sequelize.STRING
            }
        },{timestamps: false,tableName: 'batiment'});
    return Batiment;
  };