import { Request, Response, NextFunction } from "express";
import { VisitorController } from "../controllers/visitors";

const visitorController = new VisitorController();

export class VisitorsHttpHandler {
    private visitorController = new VisitorController();

    public async verifyVisitor(req: Request, res: Response): Promise<void> {
        try {
            const { Usuario, password } = req.body;
            
            if (!Usuario || !password) {
                res.status(400).json({
                    success: false,
                    message: "Data required"
                });
                return;
            }

            const result = await this.visitorController.verifyVisitor(Usuario, password);
            res.status(result.success ? 200 : 401).json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Server error"
            });
        }
    }
}

// Export the instance of VisitorsHttpHandler
export default VisitorsHttpHandler; 
