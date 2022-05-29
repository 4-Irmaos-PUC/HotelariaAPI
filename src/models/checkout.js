'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckOut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheckOut.init({
    dataSaida: DataTypes.DATE,
    valorFinal: DataTypes.DOUBLE,
    idReserva: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'CheckOut',
  });
  return CheckOut;
};