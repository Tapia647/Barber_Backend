import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller.js";
import { AppointmentService } from "../services/appointment.service.js";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";
import { orm } from "../shared/db/orm.js";
import { ClientService } from "../services/client.service.js";
const router = Router();
const em = orm.em;
const repository = new AppointmentRepository(em);
const client = new ClientService(em);
const service = new AppointmentService(repository, em, client);
const controller = new AppointmentController(service);
router.post("/", controller.createAppointment);
export { router as appointmentRouter };
//recodar no hacer nunca mas a mano las dependencias :(
//# sourceMappingURL=appointment.routes.js.map