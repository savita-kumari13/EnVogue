import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
	id: { type: String, required: true },
	brand: { type: String, required: true },
	rating: { type: Number },
	sizes: [
		{
			size: String
		}
	],
	price: { type: Number, required: true },
	description: { type: String },
	category: { type: String, required: true },
	images: [
		{
			src: String
		}
	]
});

const Product = model('Product', productSchema);

export default Product;
