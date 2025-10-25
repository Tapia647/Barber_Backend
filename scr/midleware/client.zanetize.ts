// src/middlewares/zanetizeClientInput.ts
import { Request, Response, NextFunction } from "express";

export class ZanetizeClient {
  // método estático para usar directamente sin instanciar
  static sanitize(req: Request, res: Response, next: NextFunction) {
    // copiamos solo los campos esperados
    const input = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };

    // eliminamos campos vacíos o inválidos
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

    req.body.zanetizeClientInput = input;

    next();
  }
}
