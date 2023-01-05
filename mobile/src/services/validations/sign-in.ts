import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const signInResolver = zodResolver(signInValidationSchema);
