 const Router = require('express');
const router = new Router();
 const TrackController = require('../controllers/trackController')

 router.post('/', TrackController.addComment);


 module.exports = router;