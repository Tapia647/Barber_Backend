import { Client } from "../entities/Client.js";
export class ClientService {
    constructor(clientRepository, em) {
        this.clientRepository = clientRepository;
        this.em = em;
    }
    //CREATE  
    async createClient(name, phone, email) {
        const existingClient = await this.clientRepository.getClientByEmail(email);
        if (existingClient) {
            throw new Error('Client already exists');
        }
        const newClient = new Client();
        // asigna ID si tu entidad lo requiere (quita la siguiente línea si es autoincremental)
        // newClient.IDclient = IDclient;
        newClient.name = name;
        newClient.phone = phone;
        newClient.email = email;
        await this.clientRepository.save(newClient);
        return newClient;
    }
    //READ
    async getClients() {
        return await this.clientRepository.findAll();
    }
    async getClientByID(IDclient) {
        const iclient = await this.clientRepository.getClientByID(IDclient);
        return iclient;
    }
    //UPDATE
    async updateClient(IDclient, name, email, phone) {
        const aclient = await this.clientRepository.getClientByID(IDclient);
        if (!aclient) {
            throw Error('Client not found');
        }
        aclient.name = name;
        aclient.email = email;
        aclient.phone = phone;
        await this.clientRepository.save(aclient);
        return aclient;
    }
    //DELETE
    async deleteClient(IDclient) {
        const uclient = await this.clientRepository.getClientByID(IDclient);
        if (!uclient) {
            throw new Error("Client cannot delete because client not found");
        }
        await this.clientRepository.remove(uclient);
    }
}
//# sourceMappingURL=client.service.js.map