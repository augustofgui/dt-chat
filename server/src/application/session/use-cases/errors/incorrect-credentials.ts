import { AppError } from '@helpers/app-error';

export class IncorrectCredentials extends AppError {
  constructor() {
    super(401, 'Incorrect email/password combination.');
  }
}
