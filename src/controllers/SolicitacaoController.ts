import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class SolicitacaoController implements ModelController {
    private static modelName = 'Solicitacao';
    private static fieldsToManipulate = ['data', 'valorAdicional', 'idServico', 'idReserva'];

    public static async get(req: Request, res: Response): Promise<void> {
        return SolicitacaoController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return SolicitacaoController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return SolicitacaoController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return SolicitacaoController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
