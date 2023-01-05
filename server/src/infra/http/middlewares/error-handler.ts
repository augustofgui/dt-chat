import { AppError } from '@helpers/app-error';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export async function errorHandler(
  err: ErrorRequestHandler,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error', message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error', message: 'Internal server error',
  });
}
