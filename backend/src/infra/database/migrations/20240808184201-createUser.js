'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        createdAt:{
          type: Sequelize.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
          allowNull: false
        },
        updatedAt:{
          type: Sequelize.DATE,
          defaultValue: Sequelize.DataTypes.NOW,
          allowNull: false
        }
      })
    
  },

  async down (queryInterface, _) {
    return queryInterface.dropTable('users')
  }
};
