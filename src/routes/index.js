const Router = require('express');
const router = new Router();

const trackRouter = require('../routes/trackRouter');
const commetRoot = require('../routes/commentRouter');

router.use('/tracks', trackRouter);
router.use('/comment', commetRoot)

module.exports = router;