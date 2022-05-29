import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class CheckOutController implements ModelController {
    private static modelName = 'CheckOut';
    private static fieldsToManipulate = ['dataSaida', 'idReserva', 'valorFinal'];

    public static async get(req: Request, res: Response): Promise<void> {
        return CheckOutController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return CheckOutController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return CheckOutController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return CheckOutController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
