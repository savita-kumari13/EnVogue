import { secret } from '../config/auth.config.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

const verifyToken = (req, res, next) => {
	let token = req.session.token;
	console.log('verifyToken req', req.session);

	console.log('verifyToken token', req.session.token);

	if (!token) {
		return res.status(403).send({
			status: 403,
			message: 'No token provided!'
		});
	}
	verify(token, secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				status: 401,
				message: 'Unauthorized!'
			});
		}
		req.userId = decoded.id;
		next();
	});
};

const authJwt = {
	verifyToken
};
export default authJwt;
