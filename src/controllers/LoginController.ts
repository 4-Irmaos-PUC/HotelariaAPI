import { Request, Response, NextFunction } from 'express';
import Crypto from '../util/Crypto';

const Cliente = require('../models/cliente');

const jwt = require('jsonwebtoken');
const models = require('../models');

export default class LoginController {
    public static async login(req: Request, res: Response) {
        try {
            const usuario = req.body.usuario || '';
            const senha = req.body.senha || '';
    
            const cliente = await LoginController.buscaClienteByUsuario(usuario);
            if (LoginController.credenciaisValidas(cliente, senha)) {
                const id = cliente.id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: parseInt(process.env.JWT_EXPIRATION || '0', 10)
                });
                return res.json({ auth: true, token });
            }
            throw new Error('Credenciais inválidas.');
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    }

    public static authenticate(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
                if (err) {
                    return res.status(403).send({auth: false, message: 'Falha na autenticação.'});
                }
                (req as any).userId = user.id;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    };

    private static async buscaClienteByUsuario(usuario: string): Promise<typeof Cliente> {
        const cliente = await models.Cliente.findOne({ where: { usuario } });
        if (!cliente) {
            throw new Error('Usuário não encontrado');
        }
        return cliente;
    }

    private static credenciaisValidas(cliente: typeof Cliente, senha: string) {
        return cliente.senha === Crypto.encrypt(senha);
    }
}