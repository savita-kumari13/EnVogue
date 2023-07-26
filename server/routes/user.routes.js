import authJwt from '../middlewares/authJWT.js';
import { getUserOrders, userBoard } from '../controllers/user.controller.js';

const userRoutes = (app) => {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
		next();
	});

	app.get('/user', [authJwt.verifyToken], userBoard);
	app.get('/users/:userId/orders', [authJwt.verifyToken], getUserOrders);
};
export default userRoutes;
