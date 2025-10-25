import { NextFunction, Request, Response } from 'express';
import { Appointment } from '../entities/Appointment.js';
import { AppointmentService } from '../services/appointment.service.js';
import { handlerError } from '../utils/error.handler.js';



export class AppointmentController {

  constructor(private appointmentService: AppointmentService){}
  

  //cambio a funciones flechas para limpiar routes ya que al usar el async dependemos del this que señala la instancia a la que se asocia el objeto
  // con async express puede perder el contexto de this, porque pasa la funcion como callback
  //func flecha hace que de por si ya esta implicito el objeto y el router se puede trabajar mas simple
  
  
  // CREATE
   createAppointment = async (req: Request, res: Response) => {
    try{
      console.log("Input recibido:", req.body.zanetizeAppointmentInput);
      const { dateAppointment, time, IDclient } = req.body.zanetizeAppointmentInput;
      const appointment = await this.appointmentService.createAppointment(dateAppointment, time, IDclient);
      res.status(201).json(appointment);
    } catch (error : any){
      console.error("Error en createAppointment:", error);
      handlerError(res, 'appointment error: ')
    }
  }


  // READ

  getAllAppointments = async (req: Request, res: Response) => {
    try {
      const getAppointments = await this.appointmentService.getAllAppointments();
      res.status(200).json(getAppointments);
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    } 
  }
  

  getAppointmentById = async (req: Request, res: Response) => {
    try {
      const { id } =  req.params;
      const getAppointment = await this.appointmentService.getAppointmentByID(Number(id));
      res.status(200).json(getAppointment);
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // UPDATE
  updateAppointment = async (req: Request, res: Response) => {
    try {
      const { dateAppointment, time, IDclient } = req.body.zanetizeAppointmentInput;
      const updateAppointment = await this.appointmentService.updateAppointment(dateAppointment, time, IDclient);
      res.status(200).json(updateAppointment);
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // DELETE
  removeAppointment = async (req: Request, res: Response) => {
    try {
     const IDappointment = parseInt(req.params.id);
      const deleteAppointment = await this.appointmentService.deleteAppointment(IDappointment);
      res.status(200).json(deleteAppointment);
    } catch (error: any) {
      handlerError(res, 'Error deleting appointment: ')
    }
  }

}
