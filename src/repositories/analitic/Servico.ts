const sequelize = require('../../sequelize');

export default class Servico {
    public static async getServicosMaisComprados() {
        return await sequelize.query(`
            SELECT
                se."nome",
                sum(so."valorAdicional") as total_servico
            FROM "Solicitacao" so
            JOIN "Servico" se on se."id" = so."idServico"
            GROUP BY se."nome"
            ORDER BY total_servico desc
            FETCH FIRST 5 ROWS ONLY
        `, { type: sequelize.QueryTypes.SELECT });
    }
}
