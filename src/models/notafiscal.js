'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotaFiscal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotaFiscal.init({
    data: DataTypes.DATE,
    codigoBarras: DataTypes.STRING,
    valorImposto: DataTypes.DOUBLE,
    idCheckOut: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'NotaFiscal',
  });
  return NotaFiscal;
};