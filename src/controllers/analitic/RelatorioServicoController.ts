import { Request, Response } from 'express';
import Servico from '../../repositories/analitic/Servico';

export default class RelatorioServicoController {
    public static async getServicosMaisComprados(req: Request, res: Response): Promise<void> {
        res.json(await Servico.getServicosMaisComprados());
    };
}