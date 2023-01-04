import { client } from '@infra/database/prisma/client';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IncorrectCredentials } from './errors/incorrect-credentials';

import { authConfig } from '@config/auth';

interface AuthenticateUserRequest {
  email: string;
  password: string;
}

interface AuthenticateUserResponse {
  token: string
}

export class AuthenticateUser {
  async execute(
    request: AuthenticateUserRequest
  ): Promise<AuthenticateUserResponse> {
    const { email, password } = request;

    const user = await client.user.findUnique({ where: { email } });

    if (!user) {
      throw new IncorrectCredentials();
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new IncorrectCredentials();
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    });

    return { token };
  }
}
