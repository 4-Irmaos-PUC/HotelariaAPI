import Controller from './Controller';
import ModelController from './ModelController';
import { Request, Response } from 'express';

export default class HotelController implements ModelController {
    private static modelName = 'Hotel';
    private static fieldsToManipulate = ['nome', 'cnpj'];

    public static async get(req: Request, res: Response): Promise<void> {
        return HotelController.controller().get(req, res);
    };

    public static async put(req: Request, res: Response): Promise<void> {
        return HotelController.controller().put(req, res);
    };

    public static async delete(req: Request, res: Response): Promise<void> {
        return HotelController.controller().delete(req, res);
    };

    public static async patch(req: Request, res: Response): Promise<void> {
        return HotelController.controller().patch(req, res);
    };

    private static controller() {
        return Controller.createController(this.modelName, this.fieldsToManipulate);
    }
}
