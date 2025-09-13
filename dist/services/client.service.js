import { Client } from "../entities/Client.js";
export class ClientService {
    constructor(em) {
        this.em = em;
        this.clientRepository = em.getRepository(Client);
    }
    //create
    async setClient(params) {
        const client = new Client();
        client.name = params.name;
        client.phone = params.phone;
        client.email = params.email;
        await this.clientRepository.save(client);
        return client;
    }
    //read
    async getAllClients() {
        return await this.clientRepository.findAll();
    }
    async getClientById(id) {
        return await this.em.findOne(Client, { IDclient: id });
    }
    //update
    async updateClient(id, params) {
        const client = await this.getClientById(id);
        if (!client) {
            throw new Error('Client not found');
        }
        if (params.name !== undefined)
            client.name = params.name;
        if (params.phone !== undefined)
            client.phone = params.phone;
        if (params.email !== undefined)
            client.email = params.email;
        await this.clientRepository.save(client);
        return client;
    }
    //delete
    async deleteClient(id) {
        const client = await this.getClientById(id);
        if (!client) {
            throw new Error('Client not found');
        }
        await this.clientRepository.remove(client);
    }
}
//# sourceMappingURL=client.service.js.map