import { Payment } from "../entities/Payment.js";
export class PaymentController {
    constructor(em) {
        this.em = em;
        this.paymentRepository = em.getRepository(Payment);
    }
    //create
    async setPayment(params) {
        const payment = new Payment();
        payment.amount = params.amount;
        payment.methodPayment = params.methodPayment;
        await this.paymentRepository.save(payment);
        return payment;
    }
    //read
    async getAllPayments() {
        return await this.paymentRepository.findAll();
    }
    async getPaymentById(id) {
        return await this.em.findOne(Payment, { IDpayment: id });
    }
    //update
    async updatePayment(id, params) {
        const payment = await this.getPaymentById(id);
        if (!payment) {
            throw new Error('Payment not found');
        }
        if (params.amount !== undefined)
            payment.amount = params.amount;
        if (params.methodPayment !== undefined)
            payment.methodPayment = params.methodPayment;
        await this.paymentRepository.save(payment);
        return payment;
    }
    //delete
    async deletePayment(id) {
        const payment = await this.getPaymentById(id);
        if (!payment) {
            throw new Error('Payment not found');
        }
        await this.paymentRepository.remove(payment);
    }
}
//# sourceMappingURL=payment.controller.js.map