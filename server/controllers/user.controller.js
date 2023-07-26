import Order from '../models/Order.js';
import User from '../models/User.js';
import { Types } from 'mongoose';

export function userBoard(req, res) {
	console.log('req.query - ', req.query);
	res.status(200).send('User Content.');
}

export async function getUserOrders(req, res) {
	try {
		const { userId } = req.params;
		const orders = await Order.find({ user: new Types.ObjectId(userId) });
		console.log('orders ', orders);

		const user = await User.findById({ _id: userId });
		const products = orders.map((order) => {
			return {
				products: order.products,
				totalAmout: order.totalAmount
			};
		});
		const data = {
			user,
			products
		};
		res.status(200).json({ status: 200, ...data });
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
}
