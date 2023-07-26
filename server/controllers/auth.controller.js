import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret } from '../config/auth.config.js';
import User from '../models/User.js';

export const signup = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log('signup -- ', req.body);

		// const existingUser = await User.findOne({ email })
		// if (existingUser) {
		// 	return res.status(404).json({message: 'User already exists'})
		// }

		const hashPassword = bcrypt.hashSync(password, 10);

		const newUser = await User.create({ email, password: hashPassword });

		console.log('newUser ', newUser);

		res.status(200).json({ status: 200, user: newUser, message: 'User created successfully' });
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
};

export const signin = async (req, res) => {
	try {
		const { email, password } = req.body;

		console.log('req.query ', req.query);

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ status: 404, message: 'User not found' });
		}

		const isPasswordValid = await bcrypt.compareSync(password, user.password);

		if (!isPasswordValid) res.status(401).json({ status: 401, message: 'Invalid password' });

		const token = jwt.sign({ id: user.id }, secret, {
			algorithm: 'HS256',
			allowInsecureKeySizes: true,
			expiresIn: 86400
		});
		console.log('token = ', token);
		req.session.token = token;
		console.log('req.session =', req.session);
		res.status(200).send({
			status: 200,
			user: {
				id: user.id,
				email: user.email
			},
			token
		});
	} catch (error) {
		res.status(500).json({ status: 500, message: error.message });
	}
};

export const signout = async (req, res) => {
	try {
		req.session = null;
		return res.status(200).send({
			status: 200,
			message: "You've been signed out!"
		});
	} catch (err) {
		this.next(err);
	}
};
