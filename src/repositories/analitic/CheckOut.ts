const sequelize = require('../../sequelize');

export default class CheckOut {
    public static async getQuartosMaisCaros() {
        return await sequelize.query(`
            SELECT
                q."nome",
                sum(co."valorFinal") as total_quarto
            FROM "CheckOut" co
            JOIN "Reserva" r on r."id" = co."idReserva"
            JOIN "Quarto" q on q."id" = r."idQuarto"
            GROUP BY q."nome"
            ORDER BY total_quarto desc
            FETCH FIRST 5 ROWS ONLY
        `, { type: sequelize.QueryTypes.SELECT });
    }
}
