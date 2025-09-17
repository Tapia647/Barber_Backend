import { handlerError } from "../utils/error.handler.js";
// Si tienes rutas específicas para Appointment
export class ClientController {
    constructor() {
        // CREATE
        this.createClient = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'client not created');
            }
        };
        // READ
        this.getClients = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'clients not found');
            }
        };
        this.getClientByID = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'client not found');
            }
        };
        // UPDATE
        this.updateClient = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'client not updated');
            }
        };
        // DELETE
        this.removeClient = (req, res) => {
            try {
            }
            catch (e) {
                handlerError(res, 'client not deleted');
            }
        };
    }
    constructorr() { }
}
//# sourceMappingURL=client.controller.js.map