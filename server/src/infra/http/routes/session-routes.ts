import { Router } from 'express';
import { SessionController } from '@infra/http/controllers/session-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/authenticate', sessionController.authenticate);
sessionRoutes.get('/me', ensureAuthenticated, sessionController.me);

export { sessionRoutes };
