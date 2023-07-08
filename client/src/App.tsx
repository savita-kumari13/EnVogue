import { useState } from 'react';
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
	return (
		<>
			{/* <RouterProvider router={router} /> */}
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;
