import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
import { ClientService } from "../services/client.service.js";
import { handlerError } from "../utils/error.handler.js";
import { NextFunction } from "express";

// Si tienes rutas específicas para Appointment







export class ClientController {

constructor(private clientService : ClientService ){}
  
  // CREATE
  createClient = async (req: Request, res: Response) => {
    try{
      console.log("Input recibido:", req.body.zanetizeClientInput);
      const { name, email, phone } = req.body.zanetizeClientInput;

      const newClient = await this.clientService.createClient( name, phone, email);
      res.status(201).json(newClient);
    } catch (e){
      console.error("Error en createClient:", e);
      handlerError(res, 'client not created')
    }
  }


  // READ
  getClients = async (req: Request, res: Response) => {
    try{
      const getClients = await this.clientService.getClients();
      res.status(200).json(getClients);
    } catch(e){
      handlerError(res, 'clients not found')
    }
  }

  getClientByID = async (req: Request, res: Response) => {
    try{
      const { id } = req.params;
      const getClient = await this.clientService.getClientByID(Number(id));
      res.status(200).json(getClient);
    } catch(e){
      handlerError(res, 'client not found')
    }
  }
   

  // UPDATE
  updateClient = async (req: Request, res: Response) => {
    try{
 const { IDclient, name, email, phone } = req.body.zanetizeClientInput;

      const updateClient = await this.clientService.updateClient(IDclient, name, phone, email);
      res.status(201).json(updateClient);
    } catch(e){
      handlerError(res, 'client not updated')
    }
  }
    

  // DELETE
  removeClient = async (req: Request, res: Response)=> {
    try{
      const IDclient = parseInt(req.params.id);
      const deleteClient =  await this.clientService.deleteClient(IDclient);
      res.status(200).json(deleteClient);
    } catch(e){
      handlerError(res, 'client not deleted')
    }
  }
    
  
}
 