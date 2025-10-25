export class ZanetizeAppointment {
    static sanitize(req, res, next) {
        // copiamos solo los campos esperados
        const input = {
            IDappointment: req.body.IDappointment,
            IDclient: req.body.IDclient,
            payment: req.body.payment,
            dateAppointment: req.body.dateAppointment,
            time: req.body.time,
        };
        Object.keys(input).forEach((key) => {
            const value = input[key];
            if (value === undefined ||
                value === null ||
                (typeof value === "string" && value.trim() === "")) {
                delete input[key];
            }
        });
        req.body.zanetizeAppointmentInput = input;
        next();
    }
}
//# sourceMappingURL=appointment.zanetize.js.map