export class ZanetizeClient {
    // método estático para usar directamente sin instanciar
    static sanitize(req, res, next) {
        // copiamos solo los campos esperados
        const input = {
            IDclient: req.body.IDclient,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
        };
        // eliminamos campos vacíos o inválidos
        Object.keys(input).forEach((key) => {
            const value = input[key];
            if (value === undefined ||
                value === null ||
                (typeof value === "string" && value.trim() === "")) {
                delete input[key];
            }
        });
        req.body.zanetizeClientInput = input;
        next();
    }
}
//# sourceMappingURL=client.zanetize.js.map