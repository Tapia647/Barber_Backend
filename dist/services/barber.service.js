import { Barber } from "../entities/Barber.js";
export class BarberService {
    constructor(em) {
        this.em = em;
        this.barberRepository = em.getRepository(Barber);
    }
    //create
    async setBarber(params) {
        const barber = new Barber();
        barber.name = params.name;
        await this.barberRepository.save(barber);
        return barber;
    }
    //read
    async getAllBarbers() {
        return await this.barberRepository.findAll();
    }
    async getBarberById(id) {
        return await this.em.findOne(Barber, { IDBarber: id });
    }
    //update
    async updateBarber(id, params) {
        const barber = await this.getBarberById(id);
        if (!barber) {
            throw new Error("Barber not found");
        }
        if (params.name !== undefined)
            barber.name = params.name;
        await this.barberRepository.save(barber);
        return barber;
    }
    //delete
    async deleteBarber(id) {
        const barber = await this.getBarberById(id);
        if (!barber) {
            throw new Error("Barber not found");
        }
        await this.barberRepository.remove(barber);
    }
}
//# sourceMappingURL=barber.service.js.map