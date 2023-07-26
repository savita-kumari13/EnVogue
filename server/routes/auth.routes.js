import { checkDuplicateEmail } from '../middlewares/verifySignUp.js';
import { signin, signup, signout } from '../controllers/auth.controller.js';

const authRoutes = (app) => {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
		next();
	});

	app.post('/auth/signup', [checkDuplicateEmail], signup);

	app.post('/auth/signin', signin);

	app.get('/auth/signout', signout);
};

export default authRoutes;
