import { Appointment } from "../entities/Appointment.js";
import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";

import { ClientService } from "./client.service.js";
import { ClientRepository } from "../shared/db/repository/client.repository.js";
import { ClientController } from "../controllers/client.controller.js";



export class AppointmentService {


  constructor(private appointmentRepository: AppointmentRepository, public em : EntityManager, public clientService : ClientService) {}


  //create
  async createAppointment(dateAppointment: Date, time: string, IDclient: number): Promise <Appointment> {
    const aclient = await this.clientService.getClient(IDclient);
    if (!aclient){
      throw new Error('Client not found');
      const aclient = await this.clientService.createClient(); 
    } else {
      const existingAppointment = await this.appointmentRepository.findByDateTime(dateAppointment, time);
      if (existingAppointment) {
        throw new Error('An appointment already exists at the specified date and time');
      } else {
        const newAppointment = new Appointment();
        newAppointment.dateAppointment = dateAppointment;
        newAppointment.time = time;
        newAppointment.client = aclient;
        newAppointment.state = 'pending';

        await this.appointmentRepository.save(newAppointment);
        return newAppointment;

       } }
  }


  // Read 

  async getAllAppointments(): Promise<Appointment[]>{
    return await this.appointmentRepository.findAll();
  }

  

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
        existingAppointment.client = aclient;
        existingAppointment.state = 'pending';

        await this.appointmentRepository.save(existingAppointment);
        return existingAppointment;
      }
  }


  async deleteAppointment(id: number): Promise<void> {
    const appointment = await this.appointmentRepository.getAppointmentById(id);
    if (!appointment) {
      throw new Error("Appointment cannot delete because appointment not found");
    } 
      await this.appointmentRepository.remove(appointment);
  }

}
