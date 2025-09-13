import { Barber } from "../entities/Barber.js";
import { EntityManager } from "@mikro-orm/core";
import { BarberRepository } from "../shared/db/repository/barber.repository.js";

export class BarberService {


  private em: EntityManager;
  private barberRepository: BarberRepository;

  constructor(em: EntityManager) {
    this.em = em;
    this.barberRepository = em.getRepository(Barber);
   
  }
  //create
  async setBarber(params: Partial<Barber>) {
    const barber = new Barber();
    barber.name = params.name!;
    await this.barberRepository.save(barber);
    return barber;
  }
  //read
  async getAllBarbers(): Promise<Barber[]> {
    return await this.barberRepository.findAll();
  }
  async getBarberById(id: number): Promise<Barber | null> {
    return await this.em.findOne(Barber, { IDBarber: id });
  }
  //update
  async updateBarber(id: number, params: Partial<Barber>) {
    const barber = await this.getBarberById(id);
    if (!barber) {
      throw new Error("Barber not found");
    }
    if (params.name !== undefined) barber.name = params.name;
    await this.barberRepository.save(barber);
    return barber;
  }
  //delete
  async deleteBarber(id: number): Promise<void> {
    const barber = await this.getBarberById(id);
    if (!barber) {
      throw new Error("Barber not found");
    }
    await this.barberRepository.remove(barber);
  }
}
