const Router = require('express');
const router = new Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.create)
router.get('/all/:limit', reviewController.getAll)
router.get('/product/:product_id', reviewController.getProductReviews)

module.exports = router;