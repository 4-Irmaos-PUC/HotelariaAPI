import { Request, Response } from 'express';
import CheckOut from '../../repositories/analitic/CheckOut';

export default class RelatorioCheckOutController {
    public static async getQuartosMaisCaros(req: Request, res: Response): Promise<void> {
        res.json(await CheckOut.getQuartosMaisCaros());
    };
}