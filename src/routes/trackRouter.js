const Router = require('express');
const router = new Router();
const trackController = require('../controllers/trackController')

router.post('/', trackController.craete);
router.get('/', trackController.getAll);
router.get('/search', trackController.searchName);
router.get('/one/:id', trackController.getOne);
router.delete('/:id', trackController.deleta);
router.post('/listen/:id', trackController.listen);


module.exports = router;