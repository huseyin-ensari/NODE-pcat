const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: String,
  photoURL: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('photo', PhotoSchema);

module.exports = Photo;
