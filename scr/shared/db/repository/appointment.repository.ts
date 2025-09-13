import { EntityRepository } from "@mikro-orm/mysql";
import { Appointment } from "../../../entities/Appointment.js";


export class AppointmentRepository extends EntityRepository<Appointment> {


  async save(appointment: Appointment): Promise<void> {
    await this.em.persistAndFlush(appointment)
  }

  async remove(appointment: Appointment): Promise<void> {
    await this.em.persistAndFlush(appointment)
  }

  async getAppointmentById(id: number): Promise<Appointment | null> {
    return await this.findOne({ IDappointment: id })
  }

  async getAppointments(): Promise<Appointment[]> {
    return await this.findAll()
  }

  async findByDateTime(adate: Date, atime: string): Promise < Appointment | null > {
    return await this.findOne({dateAppointment: adate , time: atime})
  }
 
  
}; 