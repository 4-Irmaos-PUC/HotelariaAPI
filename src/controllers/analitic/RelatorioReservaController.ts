import { Request, Response } from 'express';
import Reserva from '../../repositories/analitic/Reserva';

export default class RelatorioReservaController {
    public static async getHoteisComMaisReservas(req: Request, res: Response): Promise<void> {
        res.json(await Reserva.getHoteisComMaisReservas());
    };
}