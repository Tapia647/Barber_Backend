import { Payment } from "../entities/Payment.js";
import { PaymentRepository } from "../shared/db/repository/payment.repository.js";
import { EntityManager } from "@mikro-orm/core";

export class PaymentController  {


private em: EntityManager ;
private paymentRepository: PaymentRepository;
constructor(em: EntityManager) {
  this.em = em;
  this.paymentRepository =em.getRepository(Payment);
}
//create
async setPayment(params: Partial<Payment>) 
{
  const payment = new Payment();
  payment.amount = params.amount!;
  payment.methodPayment = params.methodPayment!;
  await this.paymentRepository.save(payment);
  return payment;
}
//read
async getAllPayments(): Promise<Payment[]> {
return await this.paymentRepository.findAll();
}
async getPaymentById(id: number): Promise<Payment | null> {
return await this.em.findOne(Payment, { IDpayment: id });
}
//update
async updatePayment(id: number, params: Partial<Payment>)
{
  const payment = await this.getPaymentById(id);
  if (!payment) {
    throw new Error('Payment not found');
  }
  if (params.amount !== undefined) payment.amount = params.amount;
  if (params.methodPayment !== undefined) payment.methodPayment = params.methodPayment;
  await this.paymentRepository.save(payment);
  return payment;
}
//delete
async deletePayment(id: number): Promise<void> {
  const payment = await this.getPaymentById(id);
  if (!payment) {
    throw new Error('Payment not found');
  }
  await this.paymentRepository.remove(payment);
} 
}