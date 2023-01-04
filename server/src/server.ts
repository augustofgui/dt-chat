import '@config/env';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import { appRoutes } from '@infra/http/routes';

import { errorHandler } from '@infra/http/middlewares/error-middleware';

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 3333;

  app.use(express.json());
  app.use(cors());

  app.use('/api/v1', appRoutes);

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
}

bootstrap();
