export default abstract class ModelController {
    static async get(req: Request, res: Response): Promise<void> {};
    static async put(req: Request, res: Response): Promise<void> {};
    static async delete(req: Request, res: Response): Promise<void> {};
    static async patch(req: Request, res: Response): Promise<void> {};
}