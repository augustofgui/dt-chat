import { AppError } from '@helpers/app-error';

export class UsernameAlreadyUsed extends AppError {
  constructor() {
    super(409, 'Username already used.');
  }
}
