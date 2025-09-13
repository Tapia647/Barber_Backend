import { Client } from "../entities/Client.js";
import { EntityManager } from "@mikro-orm/core";
import { ClientRepository } from "../shared/db/repository/client.repository.js";
import { error } from "console";

export class ClientService {

private em: EntityManager;
private clientRepository: ClientRepository;

constructor(em: EntityManager) {
  this.em = em;
  this.clientRepository =em.getRepository(Client);
}


async createClient(name: string, phone:number, email: string): Promise <Client> {
  const existingClient = await this.clientRepository.findOne({email})
  if(!existingClient){
    throw new Error ('client alredy exist')
  } else{
  const newClient = new Client();
  newClient.name = name; 
  newClient.phone = phone;
  newClient.email = email;
  await this.clientRepository.save(newClient);
  return newClient;
   }
}


//read
  async getAllClients(): Promise<Client[]> {
  return await this.clientRepository.findAll();
  }


  async updateClient( IDclient:number, name:string, email:string, phone:number): Promise <Client> {
    const aclient = await this.clientRepository.getClientByID(IDclient)
    if(!aclient){
      throw Error ('Client not found')
    } else {
      aclient.name = name;
      aclient.email = email;
      aclient.phone = phone;

      await this.clientRepository.save(aclient);
      return aclient;
    }
  
  }

  async deleteClient (IDclient:number): Promise <void>{
    const uclient = await this.clientRepository.getClientByID(IDclient);
    if(!uclient){
      throw new Error("Client cannot delete because client not found");
      }

      await this.clientRepository.remove(uclient)
  }

  async getClient(IDclient:number){
    const iclient = await this.clientRepository.getClientByID(IDclient);
    return iclient;
  }
}
