import { Router } from "express";
import { BarberController } from "../controllers/barber.controller.js";
import { orm } from "../shared/db/orm.js";

const router = Router();
const barberController = new BarberController();

export {router as paymentRouter};