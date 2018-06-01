const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  _id: ObjectId,
  title: String,
  author: [String], // books can have multiple authors
  ISBN: String,
  category: [String]
});

module.exports = mongoose.Model('Book', bookSchema);
