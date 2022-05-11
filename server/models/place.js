'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  place.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
  }, {
    sequelize,
    modelName: 'place',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return place;
};