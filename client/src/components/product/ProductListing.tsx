import React from 'react';
import { Link } from 'react-router-dom';
const products = [
	{
		id: 1,
		name: 'Machined Pen',
		color: 'Black',
		price: '$35',
		href: 'product-1',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
		imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
		availableColors: [
			{ name: 'Black', colorBg: '#111827' },
			{ name: 'Brass', colorBg: '#FDE68A' },
			{ name: 'Chrome', colorBg: '#E5E7EB' }
		]
	},
	{
		id: 2,
		name: 'Machined Pen',
		color: 'Black',
		href: 'product-2',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
		imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
		price: '$140',
		availableColors: [
			{ name: 'Black', colorBg: '#111827' },
			{ name: 'Brass', colorBg: '#FDE68A' },
			{ name: 'Chrome', colorBg: '#E5E7EB' }
		]
	},
	{
		id: 3,
		name: 'Machined Pen',
		color: 'Black',
		price: '$35',
		href: 'product-3',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
		imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
		availableColors: [
			{ name: 'Black', colorBg: '#111827' },
			{ name: 'Brass', colorBg: '#FDE68A' },
			{ name: 'Chrome', colorBg: '#E5E7EB' }
		]
	},
	{
		id: 4,
		name: 'Machined Pen',
		color: 'Black',
		price: '$35',
		href: 'product-4',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
		imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
		availableColors: [
			{ name: 'Black', colorBg: '#111827' },
			{ name: 'Brass', colorBg: '#FDE68A' },
			{ name: 'Chrome', colorBg: '#E5E7EB' }
		]
	},
	{
		id: 5,
		name: 'Machined Pen',
		color: 'Black',
		price: '$35',
		href: 'product-5',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
		imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
		availableColors: [
			{ name: 'Black', colorBg: '#111827' },
			{ name: 'Brass', colorBg: '#FDE68A' },
			{ name: 'Chrome', colorBg: '#E5E7EB' }
		]
	}
];

const ProductListing = () => {
	return (
		<div className='bg-white'>
			<div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
				<div className='relative mt-8'>
					<div className='relative -mb-6 w-full overflow-x-auto pb-6'>
						<ul
							role='list'
							className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0'
						>
							{products.map((product) => (
								<li key={product.id} className='inline-flex w-64 flex-col text-center lg:w-auto mb-10'>
									<Link to={product.href} className='group relative'>
										<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200'>
											<img
												src={product.imageSrc}
												alt={product.imageAlt}
												className='h-full w-full object-cover object-center group-hover:opacity-75'
											/>
										</div>
										<div className='mt-6'>
											<p className='text-sm text-gray-500'>{product.color}</p>
											<h3 className='mt-1 font-semibold text-gray-900'>
												<div>
													<span className='absolute inset-0' />
													{product.name}
												</div>
											</h3>
											<p className='mt-1 text-gray-900'>{product.price}</p>
										</div>
									</Link>

									<h4 className='sr-only'>Available colors</h4>
									<ul role='list' className='mt-auto flex items-center justify-center space-x-3 pt-6'>
										{product.availableColors.map((color) => (
											<li
												key={color.name}
												className='h-4 w-4 rounded-full border border-black border-opacity-10'
												style={{ backgroundColor: color.colorBg }}
											>
												<span className='sr-only'>{color.name}</span>
											</li>
										))}
									</ul>
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
