const Photo = require('../models/Photo');

const homePage = async (req, res, next) => {
  try {
    const allPhoto = await Photo.find({});
    return res.render('index', { allPhoto });
  } catch (err) {
    console.log(err);
  }
};

const photoDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findById(id);

    return res.render('detail', { photo });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  homePage,
  photoDetail,
};
