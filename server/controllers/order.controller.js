import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';

export async function placeOrder(req, res) {
	try {
		const { userEmail, products } = req.body;

		let totalAmount = 0;
		const productsOrdered = await Promise.all(
			products.map(async (item) => {
				const productInfo = await Product.findById({ _id: item.productId });
				totalAmount += item.quantity * productInfo.price;
				return {
					product: productInfo,
					quantity: item.quantity,
					size: item.size
				};
			})
		);
		const user = await User.findOne({ email: userEmail });

		const order = {
			user,
			products: productsOrdered,
			totalAmount,
			status: 'completed'
		};

		console.log('order ', order);

		await Order.create(order);

		res.status(200).json({ status: 200, message: 'Order placed successfully' });
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
}
