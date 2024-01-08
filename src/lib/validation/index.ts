import * as z from 'zod';

export const SignupValidation = z.object({
	name: z.string().min(2, {
		message: 'Name Too Short.',
	}),
	username: z.string().min(2, {
		message: 'Username Too Short',
	}),
	email: z.string().email(),
	password: z.string().min(8, { message: 'too short' }),
});