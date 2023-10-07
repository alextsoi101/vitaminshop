const Router = require('express');
const productController = require('../controllers/productController');

const router = new Router();

router.get('/:text', productController.search)

module.exports = router;