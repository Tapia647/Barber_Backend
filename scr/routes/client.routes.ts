import { Router } from "express";
import { ClientController} from "../controllers/client.controller.js";
import { Client } from "../entities/Client.js";
import { ClientService } from "../services/client.service.js";
import { ClientRepository } from "../shared/db/repository/client.repository.js";
import { orm } from "../shared/db/orm.js"
import { ZanetizeClient } from "../midleware/client.zanetize.js";

const router = Router();

const em = orm.em;


const clientRepository = new ClientRepository(em, Client);
const service = new ClientService(clientRepository,em);
const controller = new ClientController(service);


router.post("/", ZanetizeClient.sanitize, controller.createClient);
router.get("/", controller.getClients)
router.get("/:id", controller.getClientByID)
router.patch("/:id", ZanetizeClient.sanitize, controller.updateClient)
router.delete("/:id", controller.removeClient)



export {router as clientRouter};