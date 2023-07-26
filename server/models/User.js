import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		minLength: 10,
		required: true,
		lowercase: true,
		unique: true
	},
	password: { type: String, required: true }
});

const User = model('User', userSchema);

export default User;
