'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckOut', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataSaida: {
        type: Sequelize.DATE
      },
      valorFinal: {
        type: Sequelize.DOUBLE
      },
      idReserva: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reserva',
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
    await queryInterface.dropTable('CheckOut');
  }
};