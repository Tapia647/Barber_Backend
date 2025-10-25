import { Client } from "../../../entities/Client.js";
import { EntityRepository } from "@mikro-orm/core";

export class ClientRepository extends EntityRepository<Client>{

  
  async save(client: Client): Promise<void> {
    await this.em.persistAndFlush(client)
  }

  async remove(client: Client): Promise<void> {
    await this.em.removeAndFlush(client)
  }

  async getClientByEmail(email: string): Promise<Client | null> {
    return await this.findOne({ email });
  }
  
  async getClientByID(id: number): Promise<Client | null> {
    return await this.findOne({ IDclient: id })
  }
  
  async getClients(): Promise<Client[]>{
    return await this.findAll()
  }
  
}