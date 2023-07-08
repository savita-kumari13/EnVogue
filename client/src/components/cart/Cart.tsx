/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid';

const products = [
	{
		id: 1,
		name: 'Artwork Tee',
		href: '#',
		price: '$32.00',
		color: 'Mint',
		size: 'Medium',
		inStock: true,
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg',
		imageAlt: 'Front of mint cotton t-shirt with wavey lines pattern.'
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		price: '$32.00',
		color: 'Charcoal',
		inStock: false,
		leadTime: '7-8 years',
		size: 'Large',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
		imageAlt: 'Front of charcoal cotton t-shirt.'
	},
	{
		id: 3,
		name: 'Basic Tee',
		href: '#',
		price: '$32.00',
		color: 'Sienna',
		inStock: true,
		size: 'Large',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
		imageAlt: 'Front of sienna cotton t-shirt.'
	}
];
const policies = [
	{
		name: 'Free returns',
		imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
		description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.'
	},
	{
		name: 'Same day delivery',
		imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
		description:
			'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.'
	},
	{
		name: 'All year discount',
		imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
		description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.'
	},
	{
		name: 'For the planet',
		imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
		description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.'
	}
];

const Cart = () => {
	return (
		<div className='bg-white'>
			<main>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0'>
					<h1 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Shopping Cart</h1>

					<form className='mt-12'>
						<section aria-labelledby='cart-heading'>
							<h2 id='cart-heading' className='sr-only'>
								Items in your shopping cart
							</h2>

							<ul role='list' className='divide-y divide-gray-200 border-b border-t border-gray-200'>
								{products.map((product) => (
									<li key={product.id} className='flex py-6'>
										<div className='flex-shrink-0'>
											<img
												src={product.imageSrc}
												alt={product.imageAlt}
												className='h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32'
											/>
										</div>

										<div className='ml-4 flex flex-1 flex-col sm:ml-6'>
											<div>
												<div className='flex justify-between'>
													<h4 className='text-sm'>
														<a href={product.href} className='font-medium text-gray-700 hover:text-gray-800'>
															{product.name}
														</a>
													</h4>
													<p className='ml-4 text-sm font-medium text-gray-900'>{product.price}</p>
												</div>
												<p className='mt-1 text-sm text-gray-500'>{product.color}</p>
												<p className='mt-1 text-sm text-gray-500'>{product.size}</p>
											</div>

											<div className='mt-4 flex flex-1 items-end justify-between'>
												<p className='flex items-center space-x-2 text-sm text-gray-700'>
													{product.inStock ? (
														<CheckIcon className='h-5 w-5 flex-shrink-0 text-green-500' aria-hidden='true' />
													) : (
														<ClockIcon className='h-5 w-5 flex-shrink-0 text-gray-300' aria-hidden='true' />
													)}

													<span>{product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span>
												</p>
												<div className='ml-4'>
													<button type='button' className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
														<span>Remove</span>
													</button>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</section>

						{/* Order summary */}
						<section aria-labelledby='summary-heading' className='mt-10'>
							<h2 id='summary-heading' className='sr-only'>
								Order summary
							</h2>

							<div>
								<dl className='space-y-4'>
									<div className='flex items-center justify-between'>
										<dt className='text-base font-medium text-gray-900'>Subtotal</dt>
										<dd className='ml-4 text-base font-medium text-gray-900'>$96.00</dd>
									</div>
								</dl>
								<p className='mt-1 text-sm text-gray-500'>Shipping and taxes will be calculated at checkout.</p>
							</div>

							<div className='mt-10'>
								<button
									type='submit'
									className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
								>
									Checkout
								</button>
							</div>

							<div className='mt-6 text-center text-sm text-gray-500'>
								<p>
									or{' '}
									<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
										Continue Shopping
										<span aria-hidden='true'> &rarr;</span>
									</a>
								</p>
							</div>
						</section>
					</form>
				</div>

				{/* Policy grid */}
				<section aria-labelledby='policies-heading' className='border-t border-gray-200 bg-gray-50'>
					<h2 id='policies-heading' className='sr-only'>
						Our policies
					</h2>

					<div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
						<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
							{policies.map((policy) => (
								<div
									key={policy.name}
									className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
								>
									<div className='md:flex-shrink-0'>
										<div className='flow-root'>
											<img className='-my-1 mx-auto h-24 w-auto' src={policy.imageUrl} alt='' />
										</div>
									</div>
									<div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
										<h3 className='text-base font-medium text-gray-900'>{policy.name}</h3>
										<p className='mt-3 text-sm text-gray-500'>{policy.description}</p>
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

export default Cart;
