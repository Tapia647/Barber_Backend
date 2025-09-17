import { EntityRepository } from "@mikro-orm/mysql";
export class ClientRepository extends EntityRepository {
    async save(client) {
        await this.em.persistAndFlush(client);
    }
    async remove(client) {
        await this.em.persistAndFlush(client);
    }
    async getClientByID(id) {
        return await this.findOne({ IDclient: id });
    }
    async getClients() {
        return await this.findAll();
    }
}
//# sourceMappingURL=client.repository.js.map