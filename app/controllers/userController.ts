import { Request, Response } from 'express';
import UserCollection from '../collections/user';

class UserController {
  constructor() { }

  static async getAll(_req: Request, res: Response) {
    try {
      const user = await UserCollection.find({});
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(401).send({ error: 'Erro ao buscar usuário!' })
      }
    } catch (err) {
      return res.status(500).send({ error: 'Erro ao buscar os usuários!' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (typeof id !== 'string' || !id) return res.status(400).send({ error: 'Modelo da requisição inválido' });
      const user = await UserCollection.findById(id);
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).send({ error: 'Usuário não encontrado!' })
      }
    } catch (err) {
      return res.status(500).send({ error: 'Erro ao buscar o usuário!' });
    }
  }
}

export default UserController;
