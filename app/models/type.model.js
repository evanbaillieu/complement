module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define("type", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            nomType: {
              type: Sequelize.STRING,
              allowNull: false
            },
            nomimage: {
              type: Sequelize.STRING
            }
        },{timestamps: false,tableName: 'type'});
    return Type;
  };