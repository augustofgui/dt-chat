import { Router } from 'express';
import { UserController } from '@infra/http/controllers/user-controller';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

export { userRoutes };
