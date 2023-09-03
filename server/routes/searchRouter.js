const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.get('/:text', productController.search)

module.exports = router;