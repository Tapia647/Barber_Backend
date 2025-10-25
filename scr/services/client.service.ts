import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { ClientRepository } from "../shared/db/repository/client.repository.js";

export class ClientService {

constructor(private clientRepository: ClientRepository, public em : EntityManager ) {}

//CREATE  
async createClient(name: string, phone:number, email: string): Promise <Client> {
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
  async getClients(): Promise<Client[]> {
  return await this.clientRepository.findAll();
  }

  async getClientByID(IDclient:number){
    const iclient = await this.clientRepository.getClientByID(IDclient);
    return iclient;
  }


//UPDATE
  async updateClient(IDclient:number, name:string, email:string, phone:number): Promise <Client> {
    const aclient = await this.clientRepository.getClientByID(IDclient)
    if(!aclient){
      throw Error ('Client not found')
    } 
    aclient.name = name;
    aclient.email = email;
    aclient.phone = phone;

    await this.clientRepository.save(aclient);
    return aclient;
  }


//DELETE
  async deleteClient (IDclient:number): Promise <void>{
    const uclient = await this.clientRepository.getClientByID(IDclient);
    if(!uclient){
      throw new Error("Client cannot delete because client not found");
      }
      await this.clientRepository.remove(uclient)
  }

  
}
