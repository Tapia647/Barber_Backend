// src/middlewares/zanetizeAppointmentInput.ts
import { Request, Response, NextFunction } from "express";

export class ZanetizeAppointment {

static sanitize(req: Request, res: Response, next: NextFunction) {
  // copiamos solo los campos esperados
  const input = {
    IDappointment: req.body.IDappointment,
    IDclient: req.body.IDclient,
    payment: req.body.payment,
    dateAppointment: req.body.dateAppointment,
    time: req.body.time,
  };

 Object.keys(input).forEach((key) => {
      const value = (input as any)[key];
      if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      ) {
        delete (input as any)[key];
      }
    });

    req.body.zanetizeAppointmentInput = input;

    next();

}}