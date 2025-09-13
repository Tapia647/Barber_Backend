import { Router } from "express";
// import { AppointmentService } from '../services/appointment.service.js';
/*const router = Router();
const appointmentController = new AppointmentController(orm.em);

// ahora usás la instancia
router.get("/", appointmentController.getAllAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.post("/", appointmentController.createAppointment);
router.put("/:id", appointmentController.updateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

export default router;
*/
const router = Router();
router.get("/");
router.get("/:id", getAppointmentById);
router.post("/", postAppointment);
router.put("/:id");
router.patch();
//# sourceMappingURL=appointment.routes.js.map