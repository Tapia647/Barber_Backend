import { EntityRepository } from "@mikro-orm/mysql";
import { Appointment } from "../../../entities/Appointment.js";
export class AppointmentRepository extends EntityRepository {
    constructor(em) {
        super(em, Appointment);
    }
    async save(appointment) {
        await this.em.persistAndFlush(appointment);
    }
    async remove(appointment) {
        await this.em.persistAndFlush(appointment);
    }
    async getAppointmentById(id) {
        return await this.findOne({ IDappointment: id });
    }
    async getAppointments() {
        return await this.findAll();
    }
    async findByDateTime(adate, atime) {
        return await this.findOne({ dateAppointment: adate, time: atime });
    }
}
;
//# sourceMappingURL=appointment.repository.js.map