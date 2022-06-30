const sequelize = require('../../sequelize');

export default class CheckIn {
    public static async getQuantidadeCheckinsRealizadosAposInicioEstadia() {
        return await sequelize.query(`
            SELECT
                count(*)
            FROM "Reserva" r
            LEFT JOIN "CheckIn" ci on ci."idReserva" = r."id" and date_trunc('hour', ci."dataChegada") > date_trunc('hour', r."dataInicio")
        `, { type: sequelize.QueryTypes.SELECT, plain: true });
    }
}
