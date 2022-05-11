'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tours.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    description: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'tours',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return tours;
};