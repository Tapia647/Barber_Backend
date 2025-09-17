import { Barber } from "../entities/Barber.js";
import { EntityManager } from "@mikro-orm/core";
import { Request,Response } from "express";
import { BarberService } from "../services/barber.service.js";
import { handlerError } from "../utils/error.handler.js";

export class BarberController {

  constructor(){}


  // CREATE
   createBarber = (req: Request, res: Response): void => {
    try{
      const { body } = req;
      res.send(body);
    } catch (error : any){
      handlerError(res, 'appointment error: ')
    }
  }


  // READ

  getAllBarbers = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    } 
  }
  

  getBarberById = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // UPDATE
  updateBarber = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res,  'Error creating appointment: ')
    }
  }


  // DELETE
  removeBarber = (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      handlerError(res, 'Error deleting appointment: ')
    }
  }
}
  