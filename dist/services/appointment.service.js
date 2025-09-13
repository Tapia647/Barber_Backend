import { Appointment } from "../entities/Appointment.js";
export class AppointmentService {
    constructor(em) {
        this.em = em;
        this.appointmentRepository = em.getRepository(Appointment);
    }
    //create
    async setAppointment(params) {
        const appointment = new Appointment();
        appointment.date = params.date;
        appointment.time = params.time;
        appointment.state = params.state;
        appointment.client = params.client;
        appointment.payment = params.payment;
        await this.appointmentRepository.save(appointment);
        return appointment;
    }
    //read
    async getAllAppointments() {
        return await this.appointmentRepository.findAll();
    }
    async getAppointmentById(id) {
        return await this.em.findOne(Appointment, { IDappointment: id });
    }
    //update
    async updateAppointment(id, params) {
        const appointment = await this.getAppointmentById(id);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        if (params.date !== undefined)
            appointment.date = params.date;
        if (params.time !== undefined)
            appointment.time = params.time;
        if (params.state !== undefined)
            appointment.state = params.state;
        if (params.client !== undefined)
            appointment.client = params.client;
        if (params.payment !== undefined)
            appointment.payment = params.payment;
        await this.appointmentRepository.save(appointment);
        return appointment;
    }
    //delete
    async deleteAppointment(id) {
        const appointment = await this.getAppointmentById(id);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        await this.appointmentRepository.remove(appointment);
    }
}
//# sourceMappingURL=appointment.service.js.map