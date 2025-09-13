import { Appointment } from "../entities/Appointment.js";
import { Payment } from "../entities/Payment.js";
import { AppointmentRepository } from "../shared/db/repository/appointment.repository.js";
import { PaymentRepository } from "../shared/db/repository/payment.repository.js";
import { EntityManager } from "@mikro-orm/core";

export class PaymentService {

private em: EntityManager;
private paymentRepository: PaymentRepository;
private appointmentRepository : AppointmentRepository;
constructor(em: EntityManager) {
  this.em = em;
  this.paymentRepository =em.getRepository(Payment);
  this.appointmentRepository = em.getRepository(Appointment);
}

//create
async createPayment(IDpayment:number,amount:number, methodPayment:string, IDappointment:number): Promise <Payment>{
const xappointment = await this.appointmentRepository.getAppointmentById(IDappointment);
if (!xappointment) {
  throw new Error("Appointment not found");

  } else {

  const existingPayment = await this.paymentRepository.getPaymentbyID(IDpayment);

  if (!existingPayment) {
    throw new Error("Payment cannot create");
    } else {
    const payment = new Payment();
    payment.amount = amount;
    payment.methodPayment = methodPayment;
    await this.paymentRepository.save(payment);
    return payment;
}}}


//read
async getAllPayments(): Promise<Payment[]> {
return await this.paymentRepository.findAll();
}


}