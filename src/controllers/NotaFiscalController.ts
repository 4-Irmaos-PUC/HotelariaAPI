import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class NotaFiscalController implements ModelController {
    private static modelName = 'NotaFiscal';
    private static fieldsToManipulate = ['data', 'codigoBarras', 'valorImposto', 'idCheckOut'];

    public static async get(req: Request, res: Response): Promise<void> {
        return NotaFiscalController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return NotaFiscalController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return NotaFiscalController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return NotaFiscalController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
