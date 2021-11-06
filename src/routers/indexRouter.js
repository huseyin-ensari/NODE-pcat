const router = require('express').Router();
const pageRouter = require('./pageRouter');
const photoRouter = require('./photoRouter');

router.use('/', pageRouter);
router.use('/photo', photoRouter);

module.exports = router;
