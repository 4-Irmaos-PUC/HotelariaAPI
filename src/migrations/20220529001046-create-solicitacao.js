'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      valorAdicional: {
        type: Sequelize.DOUBLE
      },
      idReserva: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reserva',
          key: 'id'
        }
      },
      idServico: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Servico',
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
    await queryInterface.dropTable('Solicitacao');
  }
};