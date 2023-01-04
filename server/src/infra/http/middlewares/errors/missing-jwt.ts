import { AppError } from '@helpers/app-error';

export class MissingJWT extends AppError {
  constructor() {
    super(401, 'JWT token is missing.');
  }
}
