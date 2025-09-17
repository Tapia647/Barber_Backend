import { Router } from "express";
import { ClientController } from "../controllers/client.controller.js";
// import { AppointmentService } from '../services/appointment.service.js';
const router = Router();
const clientController = new ClientController();
export { router as clientRouter };
//# sourceMappingURL=client.routes.js.map