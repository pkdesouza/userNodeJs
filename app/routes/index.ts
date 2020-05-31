import userRoute from './userRoute';
import authRoute from './authRoute';
import { Application, Request, Response } from 'express';

export default (app: Application) => {
  app.use('/users', userRoute),
    app.use('/auth', authRoute),
    app.get('/', (req: Request, res: Response) => { res.send('Api NodeJs with express!') })
}
