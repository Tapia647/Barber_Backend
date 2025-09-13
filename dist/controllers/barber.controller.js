import { BarberService } from "../services/barber.service.js";
export class BarberController {
    constructor(em) {
        this.em = em;
        this.barberService = new BarberService(em);
    }
    // CREATE
    async createBarber(req, res) {
        try {
            const barber = await this.barberService.setBarber(req.body);
            res.status(201).json(barber);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // READ
    async getAllBarbers(req, res) {
        try {
            const barbers = await this.barberService.getAllBarbers();
            res.json(barbers);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getBarberById(req, res) {
        try {
            const barber = await this.barberService.getBarberById(parseInt(req.params.id));
            if (!barber) {
                return res.status(404).json({ message: "Barber not found" });
            }
            res.json(barber);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // UPDATE
    async updateBarber(req, res) {
        try {
            const barber = await this.barberService.updateBarber(parseInt(req.params.id), req.body);
            res.json(barber);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    // DELETE
    async deleteBarber(req, res) {
        try {
            await this.barberService.deleteBarber(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=barber.controller.js.map