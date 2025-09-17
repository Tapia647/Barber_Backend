import { Appointment } from "../entities/Appointment.js";
import { Payment } from "../entities/Payment.js";
export class PaymentService {
    constructor(em) {
        this.em = em;
        this.paymentRepository = em.getRepository(Payment);
        this.appointmentRepository = em.getRepository(Appointment);
    }
    //create
    async createPayment(IDpayment, amount, methodPayment, IDappointment) {
        const xappointment = await this.appointmentRepository.getAppointmentById(IDappointment);
        if (!xappointment) {
            throw new Error("Appointment not found");
        }
        else {
            const existingPayment = await this.paymentRepository.getPaymentbyID(IDpayment);
            if (!existingPayment) {
                throw new Error("Payment cannot create");
            }
            else {
                const payment = new Payment();
                payment.amount = amount;
                payment.methodPayment = methodPayment;
                await this.paymentRepository.save(payment);
                return payment;
            }
        }
    }
    //read
    async getAllPayments() {
        return await this.paymentRepository.findAll();
    }
}
//# sourceMappingURL=payment.service.js.map