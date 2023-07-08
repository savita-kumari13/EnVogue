import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';

const product = {
	name: 'Basic Tee 6-Pack',
	price: '$192',
	href: '#',
	breadcrumbs: [
		{ id: 1, name: 'Men', href: '#' },
		{ id: 2, name: 'Clothing', href: '#' }
	],
	images: [
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
			alt: 'Two each of gray, white, and black shirts laying flat.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
			alt: 'Model wearing plain black basic tee.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
			alt: 'Model wearing plain gray basic tee.'
		},
		{
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
			alt: 'Model wearing plain white basic tee.'
		}
	],
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
	],
	sizes: [
		{ name: 'XXS', inStock: false },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: true },
		{ name: 'XL', inStock: true },
		{ name: '2XL', inStock: true },
		{ name: '3XL', inStock: true }
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		'Hand cut and sewn locally',
		'Dyed with our proprietary colors',
		'Pre-washed & pre-shrunk',
		'Ultra-soft 100% cotton'
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
};
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
const products = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black'
	}
	// More products...
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const ProductPage = () => {
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

	return (
		<div className='bg-white'>
			<main className='pt-10 sm:pt-16'>
				<nav aria-label='Breadcrumb'>
					<ol role='list' className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
						{product.breadcrumbs.map((breadcrumb) => (
							<li key={breadcrumb.id}>
								<div className='flex items-center'>
									<a href={breadcrumb.href} className='mr-2 text-sm font-medium text-gray-900'>
										{breadcrumb.name}
									</a>
									<svg
										width={16}
										height={20}
										viewBox='0 0 16 20'
										fill='currentColor'
										aria-hidden='true'
										className='h-5 w-4 text-gray-300'
									>
										<path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
									</svg>
								</div>
							</li>
						))}
						<li className='text-sm'>
							<a href={product.href} aria-current='page' className='font-medium text-gray-500 hover:text-gray-600'>
								{product.name}
							</a>
						</li>
					</ol>
				</nav>

				{/* Image gallery */}
				<div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
					<div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
						<img
							src={product.images[0].src}
							alt={product.images[0].alt}
							className='h-full w-full object-cover object-center'
						/>
					</div>
					<div className='hidden lg:!grid lg:grid-cols-1 lg:gap-y-8'>
						<div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
							<img
								src={product.images[1].src}
								alt={product.images[1].alt}
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
							<img
								src={product.images[2].src}
								alt={product.images[2].alt}
								className='h-full w-full object-cover object-center'
							/>
						</div>
					</div>
					<div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
						<img
							src={product.images[3].src}
							alt={product.images[3].alt}
							className='h-full w-full object-cover object-center'
						/>
					</div>
				</div>

				{/* Product info */}
				<div className='text-left mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16'>
					<div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
						<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{product.name}</h1>
					</div>

					{/* Options */}
					<div className='mt-4 lg:row-span-3 lg:mt-0'>
						<h2 className='sr-only'>Product information</h2>
						<p className='text-3xl tracking-tight text-gray-900'>{product.price}</p>

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

						<form className='mt-10'>
							{/* Colors */}
							<div>
								<h3 className='text-sm font-medium text-gray-900'>Color</h3>

								<RadioGroup value={selectedColor} onChange={setSelectedColor} className='mt-4'>
									<RadioGroup.Label className='sr-only'>Choose a color</RadioGroup.Label>
									<div className='flex items-center space-x-3'>
										{product.colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? 'ring ring-offset-1' : '',
														!active && checked ? 'ring-2' : '',
														'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
													)
												}
											>
												<RadioGroup.Label as='span' className='sr-only'>
													{color.name}
												</RadioGroup.Label>
												<span
													aria-hidden='true'
													className={classNames(
														color.class,
														'h-8 w-8 rounded-full border border-black border-opacity-10'
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							{/* Sizes */}
							<div className='mt-10'>
								<div className='flex items-center justify-between'>
									<h3 className='text-sm font-medium text-gray-900'>Size</h3>
									<a href='#' className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
										Size guide
									</a>
								</div>

								<RadioGroup value={selectedSize} onChange={setSelectedSize} className='mt-4'>
									<RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
									<div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
										{product.sizes.map((size) => (
											<RadioGroup.Option
												key={size.name}
												value={size}
												disabled={!size.inStock}
												className={({ active }) =>
													classNames(
														size.inStock
															? 'cursor-pointer bg-white text-gray-900 shadow-sm'
															: 'cursor-not-allowed bg-gray-50 text-gray-200',
														active ? 'ring-2 ring-indigo-500' : '',
														'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label as='span'>{size.name}</RadioGroup.Label>
														{size.inStock ? (
															<span
																className={classNames(
																	active ? 'border' : 'border-2',
																	checked ? 'border-indigo-500' : 'border-transparent',
																	'pointer-events-none absolute -inset-px rounded-md'
																)}
																aria-hidden='true'
															/>
														) : (
															<span
																aria-hidden='true'
																className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
															>
																<svg
																	className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
																	viewBox='0 0 100 100'
																	preserveAspectRatio='none'
																	stroke='currentColor'
																>
																	<line x1={0} y1={100} x2={100} y2={0} vectorEffect='non-scaling-stroke' />
																</svg>
															</span>
														)}
													</>
												)}
											</RadioGroup.Option>
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
								<p className='text-base text-gray-900'>{product.description}</p>
							</div>
						</div>

						<div className='mt-10'>
							<h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

							<div className='mt-4'>
								<ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
									{product.highlights.map((highlight) => (
										<li key={highlight} className='text-gray-400'>
											<span className='text-gray-600'>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<section aria-labelledby='shipping-heading' className='mt-10'>
							<h2 id='shipping-heading' className='text-sm font-medium text-gray-900'>
								Details
							</h2>

							<div className='mt-4 space-y-6'>
								<p className='text-sm text-gray-600'>{product.details}</p>
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
							{products.map((product) => (
								<div key={product.id} className='group relative'>
									<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className='h-full w-full object-cover object-center lg:h-full lg:w-full'
										/>
									</div>
									<div className='mt-4 flex justify-between'>
										<div>
											<h3 className='text-sm text-gray-700'>
												<a href={product.href}>
													<span aria-hidden='true' className='absolute inset-0' />
													{product.name}
												</a>
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
