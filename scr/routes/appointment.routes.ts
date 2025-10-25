import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller.js"
import { AppointmentService } from "../services/appointment.service.js";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";
import { orm } from "../shared/db/orm.js"
import { ClientService } from "../services/client.service.js";
import { ClientRepository } from "../shared/db/repository/client.repository.js";
import { Client } from "../entities/Client.js";
import { ZanetizeAppointment } from "../midleware/appointment.zanetize.js";

const router = Router();

const em = orm.em;

const appointmentRepository = new AppointmentRepository(em);
const clientRepository = new ClientRepository(em, Client);
const client = new ClientService(clientRepository, em);

const service = new AppointmentService(appointmentRepository, em, client);
const controller = new AppointmentController(service);

router.post("/", ZanetizeAppointment.sanitize,controller.createAppointment);
router.get("/", controller.getAllAppointments);
router.get("/:id", controller.getAppointmentById);
router.patch("/:id",ZanetizeAppointment.sanitize, controller.updateAppointment);
router.delete("/:id", controller.removeAppointment);

export { router as appointmentRouter };
