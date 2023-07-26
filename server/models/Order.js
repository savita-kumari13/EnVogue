import mongoose, { Schema as _Schema, model } from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
	user: {
		type: _Schema.ObjectId,
		ref: 'User',
		required: true
	},
	products: [
		{
			product: {
				type: _Schema.ObjectId,
				ref: 'Product',
				required: true
			},
			quantity: { type: Number, required: true },
			size: { type: String }
		}
	],
	totalAmount: { type: Number, required: true },
	status: { type: String, enum: ['pending', 'processing', 'completed'], default: 'pending' }
});

const Order = model('Order', OrderSchema);

export default Order;
