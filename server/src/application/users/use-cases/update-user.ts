import { User } from '@prisma/client';

import { client } from '@infra/database/prisma/client';

import { EmailAlreadyUsed } from './errors/email-already-used';
import { UsernameAlreadyUsed } from './errors/username-already-used';

interface UpdateUserRequest {
  userId: string;
  name: string;
  username: string;
  email: string;
}

interface UpdateUserResponse {
  user: User
}

export class UpdateUser {
  async execute(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const { userId, name, username, email } = request;

    const usernameAlreadyUsed = await client.user.findUnique({ where: { username } });
    const emailAlreadyUsed = await client.user.findUnique({ where: { email } });

    if(usernameAlreadyUsed && usernameAlreadyUsed.id !== userId) {
      throw new UsernameAlreadyUsed();
    }

    if(emailAlreadyUsed && emailAlreadyUsed.id !== userId) {
      throw new EmailAlreadyUsed();
    }

    const avatarUrl = `https://avatars.dicebear.com/api/avataaars/${username}.svg`;

    const user = await client.user.update({
      where: { id: userId },
      data: {
        name,
        username,
        email,
        avatarUrl
      }
    });

    delete user.password;

    return { user };
  }
}
