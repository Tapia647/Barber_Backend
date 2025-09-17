import { handlerError } from "../utils/error.handler.js";
export class BarberController {
    constructor() {
        // CREATE
        this.createBarber = (req, res) => {
            try {
                const { body } = req;
                res.send(body);
            }
            catch (error) {
                handlerError(res, 'appointment error: ');
            }
        };
        // READ
        this.getAllBarbers = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        this.getBarberById = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // UPDATE
        this.updateBarber = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error creating appointment: ');
            }
        };
        // DELETE
        this.removeBarber = (req, res) => {
            try {
            }
            catch (error) {
                handlerError(res, 'Error deleting appointment: ');
            }
        };
    }
}
//# sourceMappingURL=barber.controller.js.map