import { Router } from 'express';
import { UserController } from '@infra/http/controllers/user-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);
userRoutes.get('/username/:username', ensureAuthenticated, userController.show);
userRoutes.patch('/', ensureAuthenticated, userController.update);

export { userRoutes };
