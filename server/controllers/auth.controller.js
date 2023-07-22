const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config')

const User = require('../models/User'); 

exports.signup = async (req, res) => {
	try {
		const { email, password } = req.body
		console.log('signup -- ', req.body)
		
		// const existingUser = await User.findOne({ email })
		// if (existingUser) {
		// 	return res.status(404).json({message: 'User already exists'})
		// }

		const hashPassword = bcrypt.hashSync(password, 10)

		const newUser = await User.create({ email, password: hashPassword })

		console.log('newUser ', newUser)
		
		res.status(201).json({message: 'User created successfully'})
		
	} catch (error) {
    res.status(500).json({ message: error.message });
	}
}

exports.signin = async (req, res) => {
	try {
		const { email, password } = req.query

		console.log('req.query ', req.query)
		
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(404).json({message: 'User not found'})
		}

		const isPasswordValid = await bcrypt.compareSync(password, user.password)

		if (!isPasswordValid) res.status(401).json({ message: 'Invalid password' })
		
		const token = jwt.sign({ id: user.id }, config.secret, { algorithm: 'HS256', allowInsecureKeySizes: true, expiresIn: 86400 })
		
		req.session.token = token;
		res.status(200).send({
			id: user.id,
			email: user.email,
			token
		})
		
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}


exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};
