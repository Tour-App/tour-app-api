'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  User.init({
    // TODO 1 - Agregar el manejor faltante de datos (Adrian)
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
    },
    age: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['hombre','mujer','otro']
    },
    identity_document: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['active','suspended','on_trip'],
      allowNull: false,
      defaultValue: 'active'
    }, 
    birth_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return User;
};