import Product from '../models/Product.js';

export async function getProductList(req, res) {
	try {
		const products = await Product.find();
		console.log('products ', products);
		res.status(200).json({ status: 200, products });
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
}

export async function getProduct(req, res) {
	try {
		const { id } = req.params;

		const product = await Product.findById({ _id: id });

		res.status(200).json({ status: 200, product });
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
}
