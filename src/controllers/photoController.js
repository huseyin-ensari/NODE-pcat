const Photo = require('../models/Photo');
const fs = require('fs');
const path = require('path');

const upload = async (req, res, next) => {
  try {
    const { title } = req.body;

    const newPhoto = await Photo.create({
      title,
      photoURL: req.file.filename,
    });

    return res.redirect('/');
  } catch (err) {
    console.log('upload error => ', err);
    return res.redirect('/');
  }
};

const updateTitle = async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;

  const photo = await Photo.findById(id);
  photo.title = title;
  photo.save();

  return res.redirect('/' + id);
};

const deletePhoto = async (req, res, next) => {
  const { id } = req.params;

  const photo = await Photo.findByIdAndDelete(id);
  let deletedPhoto = path.join(__dirname, '../uploads/' + photo.photoURL);
  fs.unlinkSync(deletedPhoto);

  return res.redirect('/');
};

module.exports = {
  upload,
  updateTitle,
  deletePhoto,
};
