import { AppError } from '@helpers/app-error';

export class InvalidJWT extends AppError {
  constructor() {
    super(401, 'Invalid JWT token.');
  }
}
