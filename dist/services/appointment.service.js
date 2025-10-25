import { Appointment } from "../entities/Appointment.js";
export class AppointmentService {
    constructor(appointmentRepository, em, clientService) {
        this.appointmentRepository = appointmentRepository;
        this.em = em;
        this.clientService = clientService;
    }
    //create
    async createAppointment(dateAppointment, time, IDclient) {
        const aclient = await this.clientService.getClientByID(IDclient);
        if (!aclient) {
            throw new Error('Client not found');
        }
        else {
            const existingAppointment = await this.appointmentRepository.findByDateTime(dateAppointment, time);
            if (existingAppointment) {
                throw new Error('An appointment already exists at the specified date and time');
            }
            else {
                const newAppointment = new Appointment();
                newAppointment.dateAppointment = dateAppointment;
                newAppointment.time = time;
                newAppointment.client = aclient;
                await this.appointmentRepository.save(newAppointment);
                return newAppointment;
            }
        }
    }
    // Read 
    async getAllAppointments() {
        return await this.appointmentRepository.getAppointments();
    }
    async getAppointmentByID(IDappointment) {
        return await this.appointmentRepository.getAppointmentById(IDappointment);
    }
    //Update
    async updateAppointment(dateAppointment, time, IDclient) {
        const aclient = await this.clientService.getClientByID(IDclient);
        if (!aclient) {
            throw Error("Client not found");
        }
        const existingAppointment = await this.appointmentRepository.findByDateTime(dateAppointment, time);
        if (!existingAppointment) {
            throw Error('Appointment not found');
        }
        else {
            existingAppointment.dateAppointment = dateAppointment;
            existingAppointment.time = time;
            await this.appointmentRepository.save(existingAppointment);
            return existingAppointment;
        }
    }
    //delete
    async deleteAppointment(id) {
        const appointment = await this.appointmentRepository.getAppointmentById(id);
        if (!appointment) {
            throw new Error("Appointment cannot delete because appointment not found");
        }
        await this.appointmentRepository.remove(appointment);
        return true; //true delete/ false not found
    }
}
//# sourceMappingURL=appointment.service.js.map