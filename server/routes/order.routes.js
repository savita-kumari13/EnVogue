import authJwt from '../middlewares/authJWT.js';
import { placeOrder } from '../controllers/order.controller.js';

const orderRoutes = (app) => {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
		next();
	});

	app.use('/confirm-order', [authJwt.verifyToken], placeOrder);
};
export default orderRoutes;
