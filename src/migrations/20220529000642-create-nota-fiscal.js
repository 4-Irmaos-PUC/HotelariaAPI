'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotaFiscal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      codigoBarras: {
        type: Sequelize.STRING
      },
      valorImposto: {
        type: Sequelize.DOUBLE
      },
      idCheckOut: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CheckOut',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotaFiscal');
  }
};