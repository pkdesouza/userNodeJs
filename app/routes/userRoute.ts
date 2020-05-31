import { Router } from 'express';
import UserController from '../controllers/userController';
import Auth from '../middlewares/auth';

const router = Router();

router.get('/', Auth, UserController.getAll);
router.get('/:id', Auth, UserController.getById);
router.post('/', UserController.create);
router.put('/:id', Auth, UserController.update);
router.delete('/:id', Auth, UserController.delete);

export default router;
