import { Request, Response } from 'express';
const models = require('../models');

export default class Controller {
    private modelName: string;
    private fieldsToManipulate: string[];

    constructor(modelName: string, fieldsToManipulate: string[]) {
        this.modelName = modelName;
        this.fieldsToManipulate = fieldsToManipulate;
    }
    
    public async get(req: Request, res: Response): Promise<void> {
        const data = await models[this.modelName].findAll();
        res.json(data);
    };
    
    public async put(req: Request, res: Response): Promise<void> {
        try {
            const data = this.requestBodyData(req);
            await models[this.modelName].create({ ...data });
            res.sendStatus(200);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    };
    
    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const data = await models[this.modelName].findByPk(id);
            if (!data) {
                res.sendStatus(404);
                return;
            }
            models[this.modelName].destroy({ where: { id } });
            res.sendStatus(200);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    };
    
    public async patch(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const existingData = await models[this.modelName].findByPk(id);
            if (!existingData) {
                res.sendStatus(404);
                return;
            }
            const data = this.requestBodyData(req);
            await models[this.modelName].update({ ...data }, { where: { id } });
            res.sendStatus(200);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    };

    public static createController(modelName: string, fieldsToManipulate: string[]): Controller {
        return new Controller(modelName, fieldsToManipulate);
    }

    private requestBodyData(req: Request): {} {
        const data: any = {};
        this.fieldsToManipulate.forEach((fieldName) => {
            if (req.body[fieldName]) {
                data[fieldName] = req.body[fieldName];
            }
        });
        return data;
    }
}