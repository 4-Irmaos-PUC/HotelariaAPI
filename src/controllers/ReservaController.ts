import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class ReservaController implements ModelController {
    private static modelName = 'Reserva';
    private static fieldsToManipulate = ['dataInicio', 'dataFim', 'idCliente', 'idHotel', 'idQuarto'];

    public static async get(req: Request, res: Response): Promise<void> {
        return ReservaController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return ReservaController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return ReservaController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return ReservaController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
