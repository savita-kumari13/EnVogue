import User from '../models/User.js';

export const checkDuplicateEmail = async (req, res, next) => {
	try {
		console.log('checkDuplicateEmail---- req', req.query);
		const email = req.body.email;
		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).send({
				status: 400,
				message: 'Failed! Email is already in use!'
			});
		}

		next();
	} catch (error) {
		return res.status(500).send({
			status: 500,
			message: 'Unable to validate Email!'
		});
	}
};
