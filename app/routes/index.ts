import userRoute from './userRoute';
import { Application, Request, Response } from 'express';

export default (app: Application) => {
  app.use('/users', userRoute),
    app.get('/', (req: Request, res: Response) => { res.send('Api NodeJs with express!') })
}
