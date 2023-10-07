const Router = require('express');
const reviewController = require('../controllers/reviewController');

const router = new Router();

router.post('/', reviewController.create)
router.get('/all/:limit', reviewController.getAll)
router.get('/product/:product_id', reviewController.getProductReviews)

module.exports = router;