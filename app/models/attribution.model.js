module.exports = (sequelize, Sequelize) => {
    const Attribution = sequelize.define("attribution", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            idBatiment: {
              type: Sequelize.INTEGER,
            },
            idSalle: {
              type: Sequelize.INTEGER
            }
        },{timestamps: false,tableName: 'attribution'});
    return Attribution;
  };