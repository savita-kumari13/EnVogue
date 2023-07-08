// routes.js
import React from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import SignUp from '@components/auth/Signup';
import SignIn from '@components/auth/Signin';
import ProductListing from '@components/product/ProductListing';
import ProductPage from '@components/product/ProductPage';
import Dashboard from '@components/dashboard/Dashboard';
import Header from '@components/header/Header';
import Cart from '@components/cart/Cart';
import Checkout from '@components/checkout/Checkout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		loader: () => <div>loading</div>,
		children: [
			{
				index: true,
				element: <Dashboard />,
				loader: () => <div>loading</div>
			},
			{
				path: '/auth/register',
				element: <SignUp />,
				loader: () => <div>loading</div>
			},
			{
				path: '/auth/signin',
				element: <SignIn />,
				loader: () => <div>loading</div>
			},
			{
				path: '/products',
				element: <ProductListing />,
				loader: () => <div>loading</div>
			},
			{
				path: '/products/:productId',
				element: <ProductPage />,
				loader: () => <div>loading</div>
			},
			{
				path: '/cart',
				element: <Cart />,
				loader: () => <div>loading</div>
			},
			{
				path: '/checkout',
				element: <Checkout />,
				loader: () => <div>loading</div>
			}
		]
	}
]);

const AppRoutes = () => (
	<Routes>
		<Route
			path='/*'
			element={
				<React.Fragment>
					<Header />
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/auth/register' element={<SignUp />} />
						<Route path='/auth/signin' element={<SignIn />} />
						<Route path='/products' element={<ProductListing />} />
						<Route path='/products/:productId' element={<ProductPage />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/checkout' element={<Checkout />} />
					</Routes>
				</React.Fragment>
			}
		/>
	</Routes>
);

export default AppRoutes;
