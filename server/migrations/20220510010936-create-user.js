'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM,
        values: [
          'hombre',
          'mujer',
          'otro'
        ],
        default: null,
        allowNull: true
      },
      identity_document: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          'active',
          'suspended',
          'on_trip',
        ],
        defaultValue: 'active'
      },
      birth_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('users');
  }
};