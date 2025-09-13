const handlerError = (res, error) => {
    res.status(500);
    res.send({ error });
};
export { handlerError };
//# sourceMappingURL=error.handler.js.map