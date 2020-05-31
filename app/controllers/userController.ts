import { Request, Response } from 'express';
import UserCollection from '../collections/user';
import { UserIsValid, UserIdIsValid } from '../viewModels/validations/userViewModelValidation';
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
      if (UserIdIsValid(id))
        return res.status(400).send({ error: 'Modelo da requisição inválido' });
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
  static async create(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body;
      if (!UserIsValid({ email, name, password }))
        return res.status(400).send({ error: 'Modelo da requisição inválido' });
      if (await UserCollection.findOne({ email }))
        return res.status(400).send({ error: 'Usuário já existe!' });

      const user = await UserCollection.create({ email, name, password });
      if (user) {
        return res.status(201).json();
      } else {
        return res.status(401).send({ error: 'Erro ao salvar usuário!' })
      }
    } catch (ex) {
      return res.status(500).send({ error: 'Erro ao criar o usuário!', err: ex });
    }
  }
}

export default UserController;
