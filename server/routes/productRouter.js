const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.create)
router.put('/', productController.update)
router.get('/', productController.getAll)
router.get('/product/:id', productController.getOne)
router.get('/totalcount', productController.getTotalCount)

module.exports = router;