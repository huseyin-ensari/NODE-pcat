const router = require('express').Router();
const { homePage, photoDetail } = require('../controllers/pageController');

router.get('/', homePage);
router.get('/:id', photoDetail);

module.exports = router;
