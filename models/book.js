var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var bookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  release_date: String
})

//create the book model
var Book = mongoose.model('Book', bookSchema);

//export the book model from this module
module.exports = Book;
