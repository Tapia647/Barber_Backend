import { NextFunction, Request, Response } from 'express';
import { Appointment } from '../entities/Appointment.js';
import { AppointmentService } from '../services/appointment.service.js';

import { handlerError } from '../utils/error.handler.js';



function zanetizeAppointmentInput(req: Request, res: Response, next: NextFunction ) {
  req.body.zanetizeAppointmentInput = {
    IDappointment: req.body.IDappointment,
    client: req.body.client,
    payment: req.body.payment,
    dateAppointment: req.body.dateAppointment,
    time: req.body.time,
  }
  
  //more checks
 Object.keys(req.body.zanetizeAppointmentInput).forEach((key) => {
  const value = req.body.zanetizeAppointmentInput[key]
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "")
    ) {
    delete req.body.zanetizeAppointmentInput[key]
    }
  })

  next()
}




export class AppointmentController {

  constructor(private appointmentService: AppointmentService){}
  

  //cambio a funciones flechas para limpiar routes ya que al usar el async dependemos del this que señala la instancia a la que se asocia el objeto
  // con async express puede perder el contexto de this, porque pasa la funcion como callback
  //func flecha hace que de por si ya esta implicito el objeto y el router se puede trabajar mas simple
  
  
  // CREATE
   createAppointment = (req: Request, res: Response): void => {
    try{
      const { body } = req;
      res.send(body);
    } catch (error : any){
      handlerError(res, 'appointment error: ')
    }
  }


  // READ

  getAllAppointments = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    } 
  }
  

  getAppointmentById = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // UPDATE
  updateAppointment = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // DELETE
  removeAppointment = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res, 'Error deleting appointment: ')
    }
  }

}
