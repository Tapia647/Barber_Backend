import { Client } from "../entities/Client.js";
export class ClientService {
    constructor(em) {
        this.em = em;
        this.clientRepository = em.getRepository(Client);
    }
    async createClient(name, phone, email) {
        const existingClient = await this.clientRepository.findOne({ email });
        if (!existingClient) {
            throw new Error('client alredy exist');
        }
        else {
            const newClient = new Client();
            newClient.name = name;
            newClient.phone = phone;
            newClient.email = email;
            await this.clientRepository.save(newClient);
            return newClient;
        }
    }
    //read
    async getAllClients() {
        return await this.clientRepository.findAll();
    }
    async updateClient(IDclient, name, email, phone) {
        const aclient = await this.clientRepository.getClientByID(IDclient);
        if (!aclient) {
            throw Error('Client not found');
        }
        else {
            aclient.name = name;
            aclient.email = email;
            aclient.phone = phone;
            await this.clientRepository.save(aclient);
            return aclient;
        }
    }
    async deleteClient(IDclient) {
        const uclient = await this.clientRepository.getClientByID(IDclient);
        if (!uclient) {
            throw new Error("Client cannot delete because client not found");
        }
        await this.clientRepository.remove(uclient);
    }
    async getClient(IDclient) {
        const iclient = await this.clientRepository.getClientByID(IDclient);
        return iclient;
    }
}
//# sourceMappingURL=client.service.js.map