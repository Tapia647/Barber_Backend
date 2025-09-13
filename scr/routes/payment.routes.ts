import { Router } from "express";
import { BarberController } from "../controllers/barber.controller.js";
import { orm } from "../shared/db/orm.js";

const router = Router();
const barberController = new BarberController(orm.em);
// ahora usás la instancia
router.get("/", barberController.getAllBarbers);
router.get("/:id", barberController.getBarberById);
router.post("/", barberController.createBarber);
router.put("/:id", barberController.updateBarber);
router.delete("/:id", barberController.deleteBarber);
export default router;