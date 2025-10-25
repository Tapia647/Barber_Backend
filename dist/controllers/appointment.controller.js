import { handlerError } from '../utils/error.handler.js';
export class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        //cambio a funciones flechas para limpiar routes ya que al usar el async dependemos del this que señala la instancia a la que se asocia el objeto
        // con async express puede perder el contexto de this, porque pasa la funcion como callback
        //func flecha hace que de por si ya esta implicito el objeto y el router se puede trabajar mas simple
        // CREATE
        this.createAppointment = async (req, res) => {
            try {
                console.log("Input recibido:", req.body.zanetizeAppointmentInput);
                const { dateAppointment, time, IDclient } = req.body.zanetizeAppointmentInput;
                const appointment = await this.appointmentService.createAppointment(dateAppointment, time, IDclient);
                res.status(201).json(appointment);
            }
            catch (error) {
                console.error("Error en createAppointment:", error);
                handlerError(res, 'appointment error: ');
            }
        };
        // READ
        this.getAllAppointments = async (req, res) => {
            try {
                const getAppointments = await this.appointmentService.getAllAppointments();
                res.status(200).json(getAppointments);
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        this.getAppointmentById = async (req, res) => {
            try {
                const { id } = req.params;
                const getAppointment = await this.appointmentService.getAppointmentByID(Number(id));
                res.status(200).json(getAppointment);
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // UPDATE
        this.updateAppointment = async (req, res) => {
            try {
                const { dateAppointment, time, IDclient } = req.body.zanetizeAppointmentInput;
                const updateAppointment = await this.appointmentService.updateAppointment(dateAppointment, time, IDclient);
                res.status(200).json(updateAppointment);
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // DELETE
        this.removeAppointment = async (req, res) => {
            try {
                const IDappointment = parseInt(req.params.id);
                const deleteAppointment = await this.appointmentService.deleteAppointment(IDappointment);
                res.status(200).json(deleteAppointment);
            }
            catch (error) {
                handlerError(res, 'Error deleting appointment: ');
            }
        };
    }
}
//# sourceMappingURL=appointment.controller.js.map