import { User } from '@prisma/client';
import { client } from '@infra/database/prisma/client';

import { UserNotFound } from './errors/user-not-found';

interface GetAuthenticatedUserRequest {
  userId: string;
}

interface GetAuthenticatedUserResponse {
  user: User
}

export class GetAuthenticatedUser {
  async execute(
    request: GetAuthenticatedUserRequest
  ): Promise<GetAuthenticatedUserResponse> {
    const { userId } = request;

    const user = await client.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new UserNotFound();
    }

    return { user };
  }
}
