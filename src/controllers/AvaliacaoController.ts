import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class AvaliacaoController implements ModelController {
    private static modelName = 'Avaliacao';
    private static fieldsToManipulate = ['data', 'nota', 'idReserva'];

    public static async get(req: Request, res: Response): Promise<void> {
        return AvaliacaoController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return AvaliacaoController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return AvaliacaoController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return AvaliacaoController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
