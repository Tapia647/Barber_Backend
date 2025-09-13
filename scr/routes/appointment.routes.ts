import { Router } from "express";
import { AppointmentController } from '../controllers/appointment.controller.js';
import { AppointmentService } from '../services/appointment.service.js';
import { AbstractSqlDriver } from "@mikro-orm/mysql";


export default function appointmentRoutes(appointmentService: AppointmentService) {
  const router = Router();
  // Crear instancia del controlador con el servicio inyectado
  const appointmentController = new AppointmentController(appointmentService);
  router.post('/', (req, res) => appointmentController.createAppointment(req, res));
  // otras rutas...
  return router;


  
}
