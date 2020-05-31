import { Request, Response } from 'express';
import UserCollection from '../collections/user';
import { UserIsValid, UserIdIsValid } from '../viewModels/validations/userViewModelValidation';
class UserController {
  constructor() { }

  static async getAll(_req: Request, res: Response) {
    try {
      const users = await UserCollection.find({});
      if (users)
        return res.status(200).json(users);
      return res.status(404).send({ error: 'Nenhum usuário encontrado!' })
    } catch (err) {
      return res.status(500).send({ error: 'Erro ao buscar os usuários!', exception: err });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    if (!UserIdIsValid(id))
      return res.status(400).send({ error: 'Modelo da requisição inválido' });

    try {
      const user = await UserCollection.findById(id);
      if (user)
        return res.status(200).json(user);
      return res.status(404).send({ error: 'Nenhum usuário encontrado!' })
    } catch (err) {
      return res.status(500).send({ error: 'Erro ao buscar o usuário!', exception: err });
    }
  }
  static async create(req: Request, res: Response) {
    const { email, name, password } = req.body;
    if (!UserIsValid({ email, name, password }))
      return res.status(400).send({ error: 'Modelo da requisição inválido' });

    try {
      if (await UserCollection.findOne({ email }))
        return res.status(400).send({ error: 'Usuário já existe!' });

      await UserCollection.create({ email, name, password });
      return res.status(201).json();
    } catch (ex) {
      return res.status(500).send({ error: 'Erro ao criar o usuário!', exception: ex });
    }
  }
  static async update(req: Request, res: Response) {
    const { email, name, password } = req.body;
    const { id } = req.params;
    if (!UserIsValid({ email, name, password }) || !UserIdIsValid(id))
      return res.status(400).send({ error: 'Modelo da requisição inválido' });

    try {
      await UserCollection.findOneAndUpdate({ _id: id }, { email, name, password });
      return res.status(200).json();
    } catch (ex) {
      return res.status(500).send({ error: 'Erro ao criar o usuário!', exception: ex });
    }
  }
  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (!UserIdIsValid(id))
      return res.status(400).send({ error: 'Modelo da requisição inválido' });

    try {
      await UserCollection.findByIdAndDelete(id);
      return res.status(200).send({ message: 'Usuário deletado com sucesso!' });
    } catch (err) {
      return res.status(500).send({ error: 'Erro ao deletar o usuário!' });
    }
  }
}

export default UserController;
