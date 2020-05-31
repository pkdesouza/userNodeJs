import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { HookNextFunction } from 'mongoose';
import { AuthTokenIsValid } from '../viewModels/validations/authViewModelValidation';

const auth = (req: Request, res: Response, next: HookNextFunction) => {
  const token = req.headers.auth as string;
  if (!AuthTokenIsValid(token))
    return res.status(401).send({ error: 'Token inválido!' });
  try {
    const jwtPass: string = process.env.jwtPass || '';
    const decoded = jwt.verify(token, jwtPass);
    res.locals.auth_data = decoded;
    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Erro na autenticação' });
  }
}

export default auth;
