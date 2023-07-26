import { getProduct, getProductList } from '../controllers/product.controller.js';

const productRoutes = (app) => {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
		res.header('Access-Control-Expose-Headers', 'Set-Cookie');
		res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
		next();
	});

	app.get('/products', getProductList);

	app.get('/products/:id', getProduct);
};
export default productRoutes;
