'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reserva.init({
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Reserva',
  });
  return Reserva;
};