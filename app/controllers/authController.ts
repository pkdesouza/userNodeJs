import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserCollection from '../collections/user';
import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { AuthIsValid } from '../viewModels/validations/authViewModelValidation';

class AuthController {
  constructor() {

  }
  static async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!AuthIsValid({ email, password }))
      return res.status(400).send({ error: 'Modelo da requisição inválido' });

    try {
      const user: Document | any = await UserCollection.findOne({ email }).select('+password');
      if (!user) return res.status(400).send({ error: 'Usuário não existe!' });
      const toEqualPassword = await bcrypt.compare(password, user.password);
      if (!toEqualPassword) return res.status(401).send({ error: 'Erro ao autenticar usuário!' })
      user.password = undefined;
      return res.status(200).json({ user, token: createUserToken(user.id) });
    } catch (err) {
      console.log('error', err);
      return res.status(500).send({ error: 'Erro ao buscar usuário!' });
    }
  }
}

function createUserToken(userId: string) {
  const jwt_pass: string = process.env.jwtPass || '';
  return jwt.sign({ id: userId }, jwt_pass, { expiresIn: '7d' });
}

export default AuthController;
