const mongoose = require('mongoose');
const {Schema} = mongoose

const categorySchema = new Schema({
	id: String,
  name: String,
	image: String,
	"image-alt": String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
