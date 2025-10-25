import { EntityRepository } from "@mikro-orm/core";
export class ClientRepository extends EntityRepository {
    async save(client) {
        await this.em.persistAndFlush(client);
    }
    async remove(client) {
        await this.em.persistAndFlush(client);
    }
    async getClientByEmail(email) {
        return await this.findOne({ email });
    }
    async getClientByID(id) {
        return await this.findOne({ IDclient: id });
    }
    async getClients() {
        return await this.findAll();
    }
}
//# sourceMappingURL=client.repository.js.map