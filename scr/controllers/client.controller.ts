import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
import { ClientService } from "../services/client.service.js";
import { handlerError } from "../utils/error.handler.js";

// Si tienes rutas específicas para Appointment

export class ClientController {

constructorr(){}
  
  // CREATE
  createClient = (req: Request, res: Response) => {
    try{

    } catch (e){
      handlerError(res, 'client not created')
    }
  }


  // READ
  getClients = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'clients not found')
    }
  }

  getClientByID = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'client not found')
    }
  }
   

  // UPDATE
  updateClient = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'client not updated')
    }
  }
    

  // DELETE
  removeClient = (req: Request, res: Response)=> {
    try{

    } catch(e){
      handlerError(res, 'client not deleted')
    }
  }
    
  
}
