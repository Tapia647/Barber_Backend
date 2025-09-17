import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller.js"
import { AppointmentService } from "../services/appointment.service.js";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";
import { orm } from "../shared/db/orm.js"
import { ClientService } from "../services/client.service.js";




const router = Router()

const em = orm.em
const repository = new AppointmentRepository(em)
const client = new ClientService(em)

const service = new AppointmentService(repository, em, client)
const controller =  new AppointmentController(service)

router.post("/", controller.createAppointment)
router.get("/", controller.getAllAppointments)
router.get("/:id", controller.getAppointmentById)
router.patch("/:id", controller.updateAppointment)
router.delete("/:id", controller.removeAppointment)

export { router as appointmentRouter };
//recodar no hacer nunca mas a mano las dependencias :(