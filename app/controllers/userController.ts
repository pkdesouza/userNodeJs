import { Request, Response } from 'express';

class UserController {
  constructor() { }
  static async show(_req: Request, res: Response) {
    try {
      return res.status(200).send({ success: 'OK!' });
    }
    catch (err) {
      return res.status(500).send({ error: 'Erro ao buscar os usuários!' });
    }
  }
}

export default UserController;
