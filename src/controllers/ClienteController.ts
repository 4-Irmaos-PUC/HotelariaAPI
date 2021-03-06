import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';
import Crypto from '../util/Crypto';

export default class ClienteController implements ModelController {
    private static modelName = 'Cliente';
    private static fieldsToManipulate = ['nome', 'usuario', 'senha', 'cpf', 'dataNasc'];

    public static async get(req: Request, res: Response): Promise<void> {
        return ClienteController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        ClienteController.encryptSenha(req);
        return ClienteController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return ClienteController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return ClienteController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }

    private static encryptSenha(req: Request) {
        req.body.senha = Crypto.encrypt(req.body.senha);
    }
}
