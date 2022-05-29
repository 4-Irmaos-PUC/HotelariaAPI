'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Servico.init({
    nome: DataTypes.STRING
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Servico',
  });
  return Servico;
};