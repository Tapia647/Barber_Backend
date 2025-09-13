import { EntityRepository } from "@mikro-orm/mysql";
export class AppointmentRepository extends EntityRepository {
    async save(appointment) {
        await this.em.persistAndFlush(appointment);
    }
    async getAppointmentById(id) {
        return await this.findOne({ IDappointment: id });
    }
    async remove(appointment) {
        await this.em.persistAndFlush(appointment);
    }
}
//# sourceMappingURL=appointment.repository.js.map