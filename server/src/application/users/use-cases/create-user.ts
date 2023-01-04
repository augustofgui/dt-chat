import { User } from '@prisma/client';

import { client } from '@infra/database/prisma/client';

import { hash } from 'bcryptjs';

import { EmailAlreadyUsed } from './errors/email-already-used';
import { UsernameAlreadyUsed } from './errors/username-already-used';

interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  user: User
}

export class CreateUser {
  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, username, email, password } = request;

    const usernameAlreadyUsed = await client.user.findUnique({ where: { username } });
    const emailAlreadyUsed = await client.user.findUnique({ where: { email } });

    if(usernameAlreadyUsed) {
      throw new UsernameAlreadyUsed();
    }

    if(emailAlreadyUsed) {
      throw new EmailAlreadyUsed();
    }

    const hashedPassword = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword
      }
    });

    delete user.password;

    return { user };
  }
}
