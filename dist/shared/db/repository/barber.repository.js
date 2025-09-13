import { EntityRepository } from "@mikro-orm/mysql";
export class BarberRepository extends EntityRepository {
    async save(barber) {
        await this.em.persistAndFlush(barber);
    }
    async getBarberbyID(id) {
        return await this.findOne({ IDBarber: id });
    }
    async remove(barber) {
        await this.em.persistAndFlush(barber);
    }
}
//# sourceMappingURL=barber.repository.js.map