import { Response } from 'express';

const handlerError = (res: Response, error: string) => {
  res.status(500);
  res.send({ error });
};
export { handlerError };