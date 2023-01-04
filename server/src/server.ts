import '@config/env';

import express from 'express';
import cors from 'cors';

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 3333;

  app.use(express.json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

bootstrap();
