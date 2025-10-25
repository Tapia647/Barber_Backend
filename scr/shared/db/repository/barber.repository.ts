import { Barber } from "../../../entities/Barber.js";

import { EntityRepository } from "@mikro-orm/mysql";
export class BarberRepository extends EntityRepository<Barber>{


  async save(barber: Barber): Promise<void> {
      await this.em.persistAndFlush(barber);}


     async getBarberbyID(id: number): Promise<Barber | null> {
      return await this.findOne({ IDBarber: id });}


    async remove(barber: Barber): Promise<void> {
      await this.em.removeAndFlush(barber);}

    }