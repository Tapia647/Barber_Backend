import { Appointment } from "../entities/Appointment.js";
import { AppointmentState } from "../entities/Appointment.js";
import { EntityManager } from "@mikro-orm/core";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";
import { ClientService } from "./client.service.js";



export class AppointmentService {


  constructor(private appointmentRepository: AppointmentRepository, public em : EntityManager, public clientService : ClientService) {}


  //create
  async createAppointment(dateAppointment: Date, time: string, IDclient: number): Promise <Appointment> {
    const aclient = await this.clientService.getClient(IDclient);
    if (!aclient) {
      throw new Error('Client not found');
    } else { 
      const existingAppointment = await this.appointmentRepository.findByDateTime(dateAppointment, time);
      if (existingAppointment) {
        throw new Error('An appointment already exists at the specified date and time');
        } else {
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
  async getAllAppointments(): Promise<Appointment[]> {
    return await this.appointmentRepository.getAppointments();
  }

  async getAppointment(IDappointment: number): Promise< Appointment | null > {
    return await this.appointmentRepository.getAppointmentById(IDappointment)
  }


  //Update
  async updateAppointment(dateAppointment: Date, time: string, IDclient: number): Promise <Appointment | null> {
  const aclient = await this.clientService.getClient(IDclient);
  if (!aclient){
    throw Error ("Client not found")
  }
   const existingAppointment = await this.appointmentRepository.findByDateTime(dateAppointment, time);
      if (!existingAppointment) {
        throw Error ('Appointment not found') 
      } else {
        existingAppointment.dateAppointment = dateAppointment;
        existingAppointment.time = time;
        
        await this.appointmentRepository.save(existingAppointment);
        return existingAppointment;
      }
  }


  //delete
  async deleteAppointment(id: number): Promise<boolean> {
    const appointment = await this.appointmentRepository.getAppointmentById(id);
    if (!appointment) {
      throw new Error("Appointment cannot delete because appointment not found");
    } 
      await this.appointmentRepository.remove(appointment);
      return true;//true delete/ false not found
  }

}
