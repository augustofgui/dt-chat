import { AppError } from '@helpers/app-error';

export class EmailAlreadyUsed extends AppError {
  constructor() {
    super(409, 'Email address already used.');
  }
}
