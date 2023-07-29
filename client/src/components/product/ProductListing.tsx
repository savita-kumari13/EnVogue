import { productAtom } from '@atoms/productAtom';
import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
	const [productss, setProducts] = useAtom(productAtom);

	const getProductList = async () => {
		try {
			const url = 'http://127.0.0.1:4000/products';

			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const response = await axios(url, options);
			if (response?.status === 200) {
				setProducts(response?.data.products);
			}
			console.log('response ', response?.data.products);
		} catch (error) {
			console.error('Error getting products:', error);
		}
	};

	useEffect(() => {
		getProductList();
	}, []);

	return (
		<div className='bg-white'>
			<div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
				<div className='relative mt-8'>
					<div className='relative -mb-6 w-full overflow-x-auto pb-6'>
						<ul
							role='list'
							className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0'
						>
							{productss?.map((product) => (
								<li key={product._id} className='inline-flex w-64 flex-col text-center lg:w-auto mb-10'>
									<Link to={`/products/${product._id}`} state={{ product: product }} className='group relative'>
										<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200'>
											<img
												src={product.images[0].src}
												alt={product.description}
												className='h-full w-full object-cover object-center group-hover:opacity-75'
											/>
										</div>
										<div className='mt-6'>
											<h3 className='mt-1 font-semibold text-gray-900'>
												<div>
													<span className='absolute inset-0' />
													{product.brand}
												</div>
											</h3>
											<p className='mt-1 text-gray-900'>₹{product.price}</p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductListing;
