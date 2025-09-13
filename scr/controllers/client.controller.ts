import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
import { ClientService } from "../services/client.service.js";

// Si tienes rutas específicas para Appointment

export class ClientController {

private em: EntityManager;
private clientService: ClientService;
 

constructor(em: EntityManager) {
  this.em = em;
  this.clientService =new ClientService(em);
  }
  // CREATE
   async creaClient(req: Request, res: Response) {
    try {
      const client = await this.createClient(req.body);
      res.status(201).json(client);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // READ
    async getAllClients(req: Request, res: Response) {
    try {
      const clients = await this.clientService.getAllClients();
      res.json(clients);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    } }
    async getClientById(req: Request, res: Response) {
    try {
      const client = await this.clientService.getClientById(
        parseInt(req.params.id)
      );
      if (!client) {
        return res.status(404).json({ message: "Client not found" });
      }
      res.json(client);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // UPDATE
    async updateClient(req: Request, res: Response) {
    try {
      const client = await this.clientService.updateClient(
        parseInt(req.params.id),
        req.body
      );
      res.json(client);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // DELETE
    async deleteClient(req: Request, res: Response) {
    try {
      await this.clientService.deleteClient(parseInt(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
