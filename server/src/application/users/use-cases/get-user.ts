import { User } from '@prisma/client';

import { client } from '@infra/database/prisma/client';

import { UserNotFound } from './errors/user-not-found';

interface GetUserRequest {
  username: string;
}

interface GetUserResponse {
  user: User
}

export class GetUser {
  async execute(request: GetUserRequest): Promise<GetUserResponse> {
    const { username } = request;

    const user = await client.user.findUnique({ where: { username } });

    if(!user) {
      throw new UserNotFound();
    }

    delete user.password;

    return { user };
  }
}
