
const express = require('express');
const User = require('../models/User'); 


checkDuplicateEmail = async (req, res, next) => {
	try {
		console.log('checkDuplicateEmail---- req', req.query)
		const email = req.body.email
		let user = await User.findOne({ email })

    if (user) {
      return res.status(400).send({
        message: "Failed! Email is already in use!"
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate Email!"
    });
  }
};


const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;