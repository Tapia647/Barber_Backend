import { Request, Response } from 'express';
import { Appointment } from '../entities/Appointment.js';
import { AppointmentService } from '../services/appointment.service.js';

import { EntityManager } from '@mikro-orm/core';
import { handlerError } from '../utils/error.handler.js';



// Si tienes rutas específicas para Appointment

export class AppointmentController {

  constructor(private appointmentService: AppointmentService){}


  
  async createAppointment(req: Request, res: Response){
    try{
      const appointment = await this.appointmentService.createAppointment();
      res.status(201).json(appointment);
    } catch (error : any){
      handlerError(res, 'appointment error: ')

    }


  }




  // READ

  async getAllAppointments(req: Request, res: Response) {
    try {
      const appointments = await this.appointmentService.getAllAppointments();
      res.json(appointments);
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    } 
  };
  
  async getAppointmentById(req: Request, res: Response) {
    try {
      const appointment = await this.appointmentService.getAppointmentById(
        parseInt(req.params.id)
      );
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      res.json(appointment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  // UPDATE
  async updateAppointment(req: Request, res: Response) {
    try {
      const appointment = await this.appointmentService.updateAppointment(
        parseInt(req.params.id),
        req.body
      );
      res.json(appointment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  /*/ DELETE
  async deleteAppointment(req: Request, res: Response) {
    try {
      await this.appointmentService.deleteAppointment(parseInt(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}*/
async remove(req: Request, res: Response) {
  try {
  } catch (error: any) {
    handlerError(res, 'Error deleting appointment: ')
  }
}
}
