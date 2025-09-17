import { Router } from "express";
import { ClientController} from "../controllers/client.controller.js";



const router = Router();
const controller = new ClientController();

router.post("/", controller.createClient)
router.get("/", controller.getClients)
router.get("/:id", controller.getClientByID)
router.patch("/:id", controller.updateClient)
router.delete("/:id", controller.removeClient)

export {router as clientRouter};