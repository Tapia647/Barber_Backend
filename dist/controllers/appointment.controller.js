import { AppointmentService } from '../services/appointment.service.js';
import { handlerError } from '../utils/error.handler.js';
// Si tienes rutas específicas para Appointment
export class AppointmentController {
    constructor(em) {
        this.em = em;
        this.appointmentService = new AppointmentService(em);
    }
    /*/ CREATE
   async createAppointment(req: Request, res: Response) {
      try {
        const appointment = await this.appointmentService.setAppointment(req.body);
        res.status(201).json(appointment);
      } catch (error: any) {
        handlerError(res,  'Error creating appointment: ')
      }
    };
  */
    // READ
    async getAllAppointments(req, res) {
        try {
            const appointments = await this.appointmentService.getAllAppointments();
            res.json(appointments);
        }
        catch (error) {
            handlerError(res, 'Error creating appointment: ');
        }
    }
    ;
    async getAppointmentById(req, res) {
        try {
            const appointment = await this.appointmentService.getAppointmentById(parseInt(req.params.id));
            if (!appointment) {
                return res.status(404).json({ message: "Appointment not found" });
            }
            res.json(appointment);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // UPDATE
    async updateAppointment(req, res) {
        try {
            const appointment = await this.appointmentService.updateAppointment(parseInt(req.params.id), req.body);
            res.json(appointment);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // DELETE
    async deleteAppointment(req, res) {
        try {
            await this.appointmentService.deleteAppointment(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=appointment.controller.js.map