import { getProduct, getProductList } from '../controllers/product.controller.js';

const productRoutes = (app) => {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
		res.header('Access-Control-Expose-Headers', 'Set-Cookie');
		next();
	});

	app.get('/products', getProductList);

	app.get('/products/:id', getProduct);
};
export default productRoutes;
