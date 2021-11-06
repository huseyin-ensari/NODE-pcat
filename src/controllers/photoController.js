const Photo = require('../models/Photo');

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

  return res.redirect('/');
};

module.exports = {
  upload,
  updateTitle,
  deletePhoto,
};
