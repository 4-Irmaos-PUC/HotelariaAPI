'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reserva', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataInicio: {
        type: Sequelize.DATE
      },
      dataFim: {
        type: Sequelize.DATE
      },
      idCliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cliente',
          key: 'id'
        }
      },
      idHotel: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Hotel',
          key: 'id'
        }
      },
      idQuarto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quarto',
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
    await queryInterface.dropTable('Reserva');
  }
};