import './global.css'
import { Route, Routes } from 'react-router-dom';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				<Route element={<AuthLayout />}>
					{/* public routes */}
					<Route path="/signin" element={<SigninForm />} />
					<Route path="/signup" element={<SignupForm />} />
				</Route>

				{/* private Routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App