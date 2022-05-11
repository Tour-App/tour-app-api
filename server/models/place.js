"use strict";
const { Model } = require("sequelize");

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
  place.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      admin_name: {
        type: DataTypes.STRING,
      },
      admin_email: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      address_id: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["restaurant", "museum", "park", "historic"],
        default: null,
        allowNull: true,
      },
      logo: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      facebook_url: {
        type: DataTypes.STRING,
      },
      instagram_url: {
        type: DataTypes.STRING,
      },
      web_page_url: {
        type: DataTypes.STRING,
      },
      twitter_url: {
        type: DataTypes.STRING,
      },
      default_photo_id: {
        type: DataTypes.STRING,
      },
      city_id: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "place",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return place;
};
