module.exports = (sequelize, Sequelize) => {
    const Materiel = sequelize.define("metrologue", 
        {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            login: {
              type: Sequelize.STRING,
              allowNull: false
            },
            password: {
              type: Sequelize.STRING
            }
        },{timestamps: false,tableName: 'metrologue'});
    return Materiel;
  };