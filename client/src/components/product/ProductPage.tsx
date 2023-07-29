import React, { Fragment, useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { productAtom } from '@atoms/productAtom';
import { useAtom } from 'jotai';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const reviews = {
	href: '#',
	average: 4,
	totalCount: 117,
	featured: [
		{
			id: 1,
			title: 'This is the best white t-shirt out there',
			rating: 5,
			content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
			author: 'Mark Edwards',
			avatarSrc:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		{
			id: 2,
			title: 'Adds the perfect variety to my wardrobe',
			rating: 4,
			content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
			author: 'Blake Reid',
			avatarSrc:
				'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
		},
		{
			id: 3,
			title: 'All good things come in 6-Packs',
			rating: 5,
			content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
			author: 'Ben Russel',
			avatarSrc:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		}
	]
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const ProductPage = () => {
	const location = useLocation();
	const [products, setProducts] = useAtom(productAtom);
	const [product, setProduct] = useState(location?.state?.product || null);

	const { id } = useParams();

	console.log('location?.state ', location?.state);

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

	const getProduct = async () => {
		try {
			const url = `http://127.0.0.1:4000/products/${id}`;

			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const response = await axios(url, options);
			if (response?.status === 200) {
				setProduct(response?.data.product);
			}
			console.log('response ', response?.data.products);
		} catch (error) {
			console.error('Error getting products:', error);
		}
	};

	useEffect(() => {
		getProductList();
	}, [id]);

	useEffect(() => {
		if (!location?.state?.product) getProduct();
	}, [id]);

	console.log('product ', products);
	const otherProducts = products?.filter((item) => item._id !== product._id);
	const [selectedSize, setSelectedSize] = useState(product?.sizes && product?.sizes[0]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log('');
		} catch (error) {
			console.error('Error sending form data:', error);
		}
	};

	const handleSizeChange = (size) => {
		console.log('e ', size);
		setSelectedSize(size?.label);
	};

	return (
		<div className='bg-white'>
			<main className='pt-10 sm:pt-16'>
				{/* Image gallery */}
				<div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
					{product?.images?.map((image, idx) => (
						<div key={image._id} className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
							<img src={image.src} alt={product.description} className='h-full w-full object-cover object-center' />
						</div>
					))}
				</div>

				{/* Product info */}
				<div className='text-left mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16'>
					<div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
						<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{product?.brand}</h1>
						<p className='text-3xl tracking-tight text-gray-900'>{product?.description}</p>
					</div>

					{/* Options */}
					<div className='mt-4 lg:row-span-3 lg:mt-0'>
						<h2 className='sr-only'>Product information</h2>
						<p className='text-3xl tracking-tight text-gray-900'>₹{product?.price}</p>

						{/* Reviews */}
						<div className='mt-6'>
							<h3 className='sr-only'>Reviews</h3>
							<div className='flex items-center'>
								<div className='flex items-center'>
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
												'h-5 w-5 flex-shrink-0'
											)}
											aria-hidden='true'
										/>
									))}
								</div>
								<p className='sr-only'>{reviews.average} out of 5 stars</p>
								<a href={reviews.href} className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div>

						<form className='mt-10' onSubmit={handleSubmit}>
							{/* Colors */}
							<div>
								<h3 className='text-sm font-medium text-gray-900'>Color</h3>
							</div>

							{/* Sizes */}
							<div className='mt-10'>
								<div className='flex items-center justify-between'>
									<h3 className='text-sm font-medium text-gray-900'>Size</h3>
									<a href='' className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
										Size guide
									</a>
								</div>

								<RadioGroup value={selectedSize} onChange={setSelectedSize} className='mt-4'>
									<RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
									<div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
										{product?.sizes?.map((size) => (
											<Fragment key={size._id}>
												<label htmlFor='size' className='flex flex-col justify-center items-center'>
													<input
														key={size.label}
														type='radio'
														value={size.label}
														checked={size.label === selectedSize?.label}
														onChange={() => handleSizeChange(size)}
														className='p-3 cursor-pointer bg-white text-indigo-500 shadow-sm group relative flex items-center justify-center rounded-full border hover:bg-gray-50 focus:outline-none '
													/>
													<p>{size.label}</p>
												</label>
											</Fragment>
										))}
									</div>
								</RadioGroup>
							</div>

							<button
								type='submit'
								className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								Add to bag
							</button>
						</form>
					</div>

					<div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
						{/* Description and details */}
						<div>
							<h3 className='sr-only'>Description</h3>

							<div className='space-y-6'>
								<p className='text-base text-gray-900'>{product?.description}</p>
							</div>
						</div>

						<section aria-labelledby='shipping-heading' className='mt-10'>
							<h2 id='shipping-heading' className='text-sm font-medium text-gray-900'>
								Details
							</h2>

							<div className='mt-4 space-y-6'>
								<p className='text-sm text-gray-600'>{product?.details}</p>
							</div>
						</section>
					</div>

					<div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
						{/* Reviews */}
						<section aria-labelledby='reviews-heading' className='border-t border-gray-200 pt-10 lg:pt-16'>
							<h2 id='reviews-heading' className='sr-only'>
								Reviews
							</h2>

							<div className='space-y-10'>
								{reviews.featured.map((review) => (
									<div key={review.id} className='flex flex-col sm:!flex-row'>
										<div className='order-2 mt-6 sm:ml-16 sm:mt-0'>
											<h3 className='text-sm font-medium text-gray-900'>{review.title}</h3>
											<p className='sr-only'>{review.rating} out of 5 stars</p>

											<div
												className='mt-3 space-y-6 text-sm text-gray-600'
												dangerouslySetInnerHTML={{ __html: review.content }}
											/>
										</div>

										<div className='order-1 flex items-center sm:flex-col sm:items-start'>
											<img src={review.avatarSrc} alt={`${review.author}.`} className='h-12 w-12 rounded-full' />

											<div className='ml-4 sm:ml-0 sm:mt-4'>
												<p className='text-sm font-medium text-gray-900'>{review.author}</p>
												<div className='mt-2 flex items-center'>
													{[0, 1, 2, 3, 4].map((rating) => (
														<StarIcon
															key={rating}
															className={classNames(
																review.rating > rating ? 'text-gray-900' : 'text-gray-200',
																'h-5 w-5 flex-shrink-0'
															)}
															aria-hidden='true'
														/>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>
				<section aria-labelledby='related-products-heading' className='bg-white'>
					<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
						<h2 id='related-products-heading' className='text-xl font-bold tracking-tight text-gray-900'>
							Customers also purchased
						</h2>

						<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
							{otherProducts?.map((product) => (
								<div key={product._id} className='group relative'>
									<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
										<img
											src={product.images[0].src}
											alt={product.description}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
									</div>
									<div className='mt-4 flex justify-between'>
										<div>
											<h3 className='text-sm text-gray-700'>
												<Link to={`/products/${product._id}`}>
													<span aria-hidden='true' className='absolute inset-0' />
													{product.brand}
												</Link>
											</h3>
											<p className='mt-1 text-sm text-gray-500'>{product.color}</p>
										</div>
										<p className='text-sm font-medium text-gray-900'>{product.price}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ProductPage;
