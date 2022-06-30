import { Request, Response } from 'express';
import CheckIn from '../../repositories/analitic/CheckIn';

export default class RelatorioCheckInController {
    public static async getQuantidadeCheckinsRealizadosAposInicioEstadia(req: Request, res: Response): Promise<void> {
        res.json(await CheckIn.getQuantidadeCheckinsRealizadosAposInicioEstadia());
    };
}