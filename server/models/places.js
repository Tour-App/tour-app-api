"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Places.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      admin_name: DataTypes.STRING,
      admin_email: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM,
        values: [],
      },
      rating: DataTypes.STRING,
      logo: DataTypes.STRING,
      description: DataTypes.STRING,
      schedule_id: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      facebook_url: DataTypes.STRING,
      instagram_url: DataTypes.STRING,
      web_page_url: DataTypes.STRING,
      twitter_url: DataTypes.STRING,
      default_photo_id: DataTypes.STRING,
      city_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "places",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Places;
};
