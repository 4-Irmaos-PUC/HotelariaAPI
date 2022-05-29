'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Solicitacao.init({
    data: DataTypes.DATE,
    valorAdicional: DataTypes.DOUBLE,
    idReserva: DataTypes.INTEGER,
    idServico: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Solicitacao',
  });
  return Solicitacao;
};