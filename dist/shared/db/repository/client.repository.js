import { EntityRepository } from "@mikro-orm/mysql";
export class ClientRepository extends EntityRepository {
    async save(client) {
        await this.em.persistAndFlush(client);
    }
    async getClientbyID(id) {
        return await this.findOne({ IDclient: id });
    }
    async remove(client) {
        await this.em.persistAndFlush(client);
    }
}
//# sourceMappingURL=client.repository.js.map