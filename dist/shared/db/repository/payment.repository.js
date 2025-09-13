import { EntityRepository } from "@mikro-orm/mysql";
export class PaymentRepository extends EntityRepository {
    async save(payment) {
        await this.em.persistAndFlush(payment);
    }
    async getPaymentbyID(id) {
        return await this.findOne({ IDpayment: id });
    }
    async remove(payment) {
        await this.em.persistAndFlush(payment);
    }
}
//# sourceMappingURL=payment.repository.js.map