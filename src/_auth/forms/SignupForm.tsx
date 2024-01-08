import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { SignupValidation } from '@/lib/validation';
import { z } from 'zod';
import { clsx } from 'clsx';
import Loader from '@/components/ui/shared/Loader';
import { createUserAccount } from '@/lib/appwrite/api';

const SignupForm = () => {

	const isLoading = false;



	// form defination
	const form = useForm<z.infer<typeof SignupValidation>>({
		resolver: zodResolver(SignupValidation),
		defaultValues: {
			name: '',
			username: '',
			email: '',
			password: '',
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof SignupValidation>) {
		// create user 
		const newUser =await createUserAccount(values)
		console.log(newUser);
	}

	return (
		<Form {...form}>
			<div className="sm:w-420 flex-center flex-col ">
				<img src="/assets/images/logo.svg" alt="iglogo" />
				<h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
					Create a New Account
				</h2>
				<p className="text-light-3 small-medium md:base-regular mt-2">
					To use Snapgram Enter Your Account Details
				</p>
			</div>

			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6 mt-5 border-2 p-3 w-[60%] md:w-[40%]lg:w-[80%] ">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder=""
									className="shad-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder=""
									className="shad-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder=""
									className="shad-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder=""
									className="shad-input"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="shad-button_primary">
					{isLoading ? (
						<div className="flex gap-2 items-center">
							{' '}
							<Loader /> Loading...
						</div>
					) : (
						'Sign Up'
					)}
				</Button>
				<p className="text-small-regular text-light-2 text-center mt-2">
					Already Have an Account ? <Link to="/signin" className='text-light-3 text-small-semibold '>Login</Link>
				</p>
			</form>
		</Form>
	);
};

export default SignupForm;