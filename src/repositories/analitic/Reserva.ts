const sequelize = require('../../sequelize');

export default class Reserva {
    public static async getHoteisComMaisReservas() {
        return await sequelize.query(`
            SELECT
                h."nome",
                count(*) qtd_reserva
            FROM "Reserva" r
            JOIN "Hotel" h on h."id" = r."idHotel"
            WHERE r."dataInicio" > date_trunc('year', now())
            GROUP BY h."nome"
            ORDER BY qtd_reserva desc
            FETCH FIRST 5 ROWS ONLY
        `, { type: sequelize.QueryTypes.SELECT });
    }
}
