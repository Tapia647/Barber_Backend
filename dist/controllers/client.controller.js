import { ClientService } from "../services/client.service.js";
// Si tienes rutas específicas para Appointment
export class ClientController {
    constructor(em) {
        this.em = em;
        this.clientService = new ClientService(em);
    }
    // CREATE
    async createClient(req, res) {
        try {
            const client = await this.clientService.setClient(req.body);
            res.status(201).json(client);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // READ
    async getAllClients(req, res) {
        try {
            const clients = await this.clientService.getAllClients();
            res.json(clients);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getClientById(req, res) {
        try {
            const client = await this.clientService.getClientById(parseInt(req.params.id));
            if (!client) {
                return res.status(404).json({ message: "Client not found" });
            }
            res.json(client);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // UPDATE
    async updateClient(req, res) {
        try {
            const client = await this.clientService.updateClient(parseInt(req.params.id), req.body);
            res.json(client);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // DELETE
    async deleteClient(req, res) {
        try {
            await this.clientService.deleteClient(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=client.controller.js.map