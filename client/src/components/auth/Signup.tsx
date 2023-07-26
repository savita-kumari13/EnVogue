import { userAtom } from '@atoms/user';
import { useAtom } from 'jotai';
import React, { lazy, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [user, setUser] = useAtom(userAtom);

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://127.0.0.1:4000/auth/signup';

			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			};

			const response = await fetch(url, options);
			const data = await response.json();
			console.log('data ', data);

			setUser(data.user);

			navigate('/');
		} catch (error) {
			console.error('Error sending form data:', error);
		}
	};

	return (
		<>
			<div className='h-screen bg-gray-50'>
				<div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
					<div className='sm:mx-auto sm:w-full sm:max-w-md'>
						<Link to={'/'}>
							<img
								className='mx-auto h-10 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
								alt='Your Company'
							/>
						</Link>
						<h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
							Sign up your account
						</h2>
					</div>

					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
						<div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
							<form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
								<div>
									<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
										Email address
									</label>
									<div className='mt-2'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											required
											onChange={handleChange}
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
										Password
									</label>
									<div className='mt-2'>
										<input
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											onChange={handleChange}
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								{/* 
								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										<input
											id='remember-me'
											name='remember-me'
											type='checkbox'
											className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
										/>
										<label htmlFor='remember-me' className='ml-3 block text-sm leading-6 text-gray-900'>
											Remember me
										</label>
									</div>
								</div> */}

								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md !bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										Sign up
									</button>
								</div>
							</form>

							<div>
								<div className='relative mt-10'>
									<div className='absolute inset-0 flex items-center' aria-hidden='true'>
										<div className='w-full border-t border-gray-200' />
									</div>
									<div className='relative flex justify-center text-sm font-medium leading-6'>
										<span className='bg-white px-6 text-gray-900'>Or continue with</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p className='mt-10 text-center text-sm text-gray-500'>
						<Link to={`/auth/signin`} className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SignUp;
