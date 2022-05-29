'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckIn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheckIn.init({
    dataChegada: DataTypes.DATE,
    idReserva: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'CheckIn',
  });
  return CheckIn;
};