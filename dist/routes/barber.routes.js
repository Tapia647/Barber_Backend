import { Router } from "express";
import { BarberController } from "../controllers/barber.controller.js";
const router = Router();
const barberController = new BarberController();
export { router as barberRouter };
//# sourceMappingURL=barber.routes.js.map