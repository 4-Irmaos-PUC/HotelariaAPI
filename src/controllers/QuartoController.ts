import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class QuartoController implements ModelController {
    private static modelName = 'Quarto';
    private static fieldsToManipulate = ['nome'];

    public static async get(req: Request, res: Response): Promise<void> {
        return QuartoController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return QuartoController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return QuartoController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return QuartoController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
