import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
	id: String,
	name: String,
	image: String
});

const Category = model('Category', categorySchema);

export default Category;
