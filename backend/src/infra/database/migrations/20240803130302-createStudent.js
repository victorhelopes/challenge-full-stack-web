'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.createTable('students', {
        ra: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
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
    return queryInterface.dropTable('students')
  }
};
