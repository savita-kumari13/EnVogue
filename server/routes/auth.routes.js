const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) { 
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, Content-Type, Accept"
		);
		next();
	});

	app.post('/auth/signup', [verifySignUp.checkDuplicateEmail], controller.signup)

	app.get("/auth/signin", controller.signin);

	app.get("/auth/signout", controller.signout);
};