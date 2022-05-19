'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admins');
  }
};
