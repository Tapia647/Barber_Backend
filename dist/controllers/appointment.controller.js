import { handlerError } from '../utils/error.handler.js';
function zanetizeAppointmentInput(req, res, next) {
    req.body.zanetizeAppointmentInput = {
        IDappointment: req.body.IDappointment,
        client: req.body.client,
        payment: req.body.payment,
        dateAppointment: req.body.dateAppointment,
        time: req.body.time,
    };
    //more checks
    Object.keys(req.body.zanetizeAppointmentInput).forEach((key) => {
        const value = req.body.zanetizeAppointmentInput[key];
        if (value === undefined ||
            value === null ||
            (typeof value === "string" && value.trim() === "")) {
            delete req.body.zanetizeAppointmentInput[key];
        }
    });
    next();
}
export class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        //cambio a funciones flechas para limpiar routes ya que al usar el async dependemos del this que señala la instancia a la que se asocia el objeto
        // con async express puede perder el contexto de this, porque pasa la funcion como callback
        //func flecha hace que de por si ya esta implicito el objeto y el router se puede trabajar mas simple
        // CREATE
        this.createAppointment = (req, res) => {
            try {
                const { body } = req;
                res.send(body);
            }
            catch (error) {
                handlerError(res, 'appointment error: ');
            }
        };
        // READ
        this.getAllAppointments = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        this.getAppointmentById = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // UPDATE
        this.updateAppointment = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // DELETE
        this.removeAppointment = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error deleting appointment: ');
            }
        };
    }
}
//# sourceMappingURL=appointment.controller.js.map