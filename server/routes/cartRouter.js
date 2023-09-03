const Router = require('express');

const router = new Router()
const cartController = require('../controllers/cartController')

router.post('/', cartController.addCartProduct)
router.put('/', cartController.updateCartProductCount)
router.get('/:user_id', cartController.getCartWithProducts)
router.delete('/', cartController.deleteCart)
router.delete('/deleteproduct', cartController.deleteCartProduct)

module.exports = router;