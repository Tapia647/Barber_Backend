import { Router } from "express";
import { ClientController} from "../controllers/client.controller.js";
import { orm } from "../shared/db/orm.js";
// import { AppointmentService } from '../services/appointment.service.js';

const router = Router();
const clientController = new ClientController(orm.em);

// ahora usás la instancia
/*router.get("/", clientController.getAllClients);
router.get("/:id", clientController.getClientById);
router.post("/", clientController.createClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);*/

router.get("/", clientController.getAllClients.bind(clientController));
router.get("/:id", clientController.getClientById.bind(clientController));
router.post("/", clientController.createClient.bind(clientController));
router.put("/:id", clientController.updateClient.bind(clientController));
router.delete("/:id", clientController.deleteClient.bind(clientController));

export default router;