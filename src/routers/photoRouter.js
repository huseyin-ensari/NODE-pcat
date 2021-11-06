const router = require('express').Router();
const {
  upload,
  updateTitle,
  deletePhoto,
} = require('../controllers/photoController');
const photoUpload = require('../middlewares/photoUpload');

router.post('/upload', photoUpload.single('photo'), upload);
router.post('/update/:id', updateTitle);
router.get('/delete/:id', deletePhoto);

module.exports = router;
