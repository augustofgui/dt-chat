import { Request, Response } from 'express';

import { CreateUser } from '@application/users/use-cases/create-user';
import { GetUser } from '@application/users/use-cases/get-user';

export class UserController {
  async create(request: Request, response: Response) {
    const { name, username, email, password } = request.body;

    const createUser = new CreateUser();

    const { user } = await createUser.execute({ name, username, email, password });

    return response.status(201).json({ user });
  }

  async show(request: Request, response: Response) {
    const { username } = request.params;

    const getUser = new GetUser();

    const { user } = await getUser.execute({ username });

    return response.status(200).json({ user });
  }
}
