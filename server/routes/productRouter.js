const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.create)
router.put('/', productController.update)
router.get('/all', productController.getAll)
router.get('/all-admin', productController.getAllAdmin)
router.get('/product/:id', productController.getOne)
router.get('/totalcount', productController.getTotalCount)

module.exports = router;