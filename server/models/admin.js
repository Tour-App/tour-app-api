'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
    }, 
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'admin',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return admin;
};
