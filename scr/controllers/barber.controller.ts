import { Barber } from "../entities/Barber.js";
import { EntityManager } from "@mikro-orm/core";
import { Request,Response } from "express";
import { BarberService } from "../services/barber.service.js";

export class BarberController {

private em: EntityManager;
private barberService: BarberService;
  constructor(em: EntityManager) {
  this.em = em;
  this.barberService =new BarberService(em);
  }
  // CREATE
    async createBarber(req: Request, res: Response) {
    try {
      const barber = await this.barberService.setBarber(req.body);
      res.status(201).json(barber);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // READ
    async getAllBarbers(req: Request, res: Response) {
    try {
      const barbers = await this.barberService.getAllBarbers();
      res.json(barbers);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    } } 
    async getBarberById(req: Request, res: Response) {
    try {
      const barber = await this.barberService.getBarberById(
        parseInt(req.params.id)
      );
      if (!barber) {
        return res.status(404).json({ message: "Barber not found" });
      }
      res.json(barber);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // UPDATE
    async updateBarber(req: Request, res: Response) {
    try {
      const barber = await this.barberService.updateBarber(
        parseInt(req.params.id),
        req.body
      );
      res.json(barber);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  // DELETE
    async deleteBarber(req: Request, res: Response) {
    try {
      await this.barberService.deleteBarber(parseInt(req.params.id));
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
  