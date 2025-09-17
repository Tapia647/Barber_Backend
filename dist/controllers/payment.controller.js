import { handlerError } from "../utils/error.handler.js";
export class PaymentController {
    constructor() {
        // CREATE
        this.createPayment = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'payment not created');
            }
        };
        // READ
        this.getPayments = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'payment not created');
            }
        };
        this.getPaymentByID = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'payment not created');
            }
        };
        // UPDATE
        this.updatePayment = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'payment not created');
            }
        };
        // DELETE
        this.removePayment = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'payment not deleted');
            }
        };
    }
}
//# sourceMappingURL=payment.controller.js.map