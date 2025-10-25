import { handlerError } from "../utils/error.handler.js";
// Si tienes rutas específicas para Appointment
export class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
        // CREATE
        this.createClient = async (req, res) => {
            try {
                console.log("Input recibido:", req.body.zanetizeClientInput);
                const { name, email, phone } = req.body.zanetizeClientInput;
                const newClient = await this.clientService.createClient(name, phone, email);
                res.status(201).json(newClient);
            }
            catch (e) {
                console.error("Error en createClient:", e);
                handlerError(res, 'client not created');
            }
        };
        // READ
        this.getClients = async (req, res) => {
            try {
                const getClient = await this.clientService.getClients();
                res.status(200).json(getClient);
            }
            catch (e) {
                handlerError(res, 'clients not found');
            }
        };
        this.getClientByID = async (req, res) => {
            try {
                const { id } = req.params;
                const getClient = await this.clientService.getClientByID(Number(id));
                res.status(200).json(getClient);
            }
            catch (e) {
                handlerError(res, 'client not found');
            }
        };
        // UPDATE
        this.updateClient = async (req, res) => {
            try {
                const { IDclient, name, email, phone } = req.body.zanetizeClientInput;
                const updateClient = await this.clientService.updateClient(IDclient, name, phone, email);
                res.status(201).json(updateClient);
            }
            catch (e) {
                handlerError(res, 'client not updated');
            }
        };
        // DELETE
        this.removeClient = async (req, res) => {
            try {
                const { IDclient } = req.body.zanetizeClientInput;
                const deleteClient = await this.clientService.deleteClient(IDclient);
                res.status(200).json(deleteClient);
            }
            catch (e) {
                handlerError(res, 'client not deleted');
            }
        };
    }
}
//# sourceMappingURL=client.controller.js.map