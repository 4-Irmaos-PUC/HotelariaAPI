import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class CheckInController implements ModelController {
    private static modelName = 'CheckIn';
    private static fieldsToManipulate = ['dataChegada', 'idReserva'];

    public static async get(req: Request, res: Response): Promise<void> {
        return CheckInController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return CheckInController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return CheckInController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return CheckInController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
