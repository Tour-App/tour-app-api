'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      admin_name: {
        type: Sequelize.STRING
      },
      admin_email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values: [
          'restaurant',
          'museum',
          'park',
          'historic',
        ],
        default: null,
        allowNull: true
      },
      logo: {
        type: Sequelize.STRING
      }, 
      description: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      facebook_url: {
        type: Sequelize.STRING,
      },
      instagram_url: {
        type: Sequelize.STRING,
      },
      web_page_url: {
        type: Sequelize.STRING,
      },
      twitter_url: {
        type: Sequelize.STRING,
      },
      default_photo_id: {
        type: Sequelize.STRING,
      },
      city_id: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('places');
  }
};