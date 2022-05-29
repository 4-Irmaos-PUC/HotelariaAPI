import { Request, Response } from 'express';

export default class WelcomeController  {
    private static modelName = 'Cliente';
    private static fieldsToManipulate = ['nome', 'usuario', 'senha', 'cpf', 'dataNasc'];

    public static async post(req: Request, res: Response): Promise<void> {
        res.send('<h1>API de Hotéis 4Irmãos<\h>');
    };
}
