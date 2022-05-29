import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class ServicoController implements ModelController {
    private static modelName = 'Servico';
    private static fieldsToManipulate = ['nome'];

    public static async get(req: Request, res: Response): Promise<void> {
        return ServicoController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return ServicoController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return ServicoController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return ServicoController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
