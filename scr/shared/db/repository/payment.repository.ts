import { Payment } from "../../../entities/Payment.js";
import { EntityRepository } from "@mikro-orm/mysql";


export class PaymentRepository extends EntityRepository<Payment>{

  
  async save(payment: Payment): Promise<void> {
      await this.em.persistAndFlush(payment);}

  async getPaymentbyID(id: number): Promise<Payment | null> {
      return await this.findOne({ IDpayment: id });}
  
  async remove(payment: Payment): Promise<void> {
      await this.em.persistAndFlush(payment);}

  async getPayment(): Promise<Payment[]> {
          return await this.findAll()
        }
}