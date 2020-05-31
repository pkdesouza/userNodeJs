import { Router } from 'express';
import UserController from '../controllers/userController'

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);

export default router;
