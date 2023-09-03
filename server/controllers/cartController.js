const ApiError = require('../error/ApiError');
const CartService = require('../services/cart-service');

class CartController {

  async getCartWithProducts(req, res, next) {
    let {user_id} = req.params

    if (!user_id) {
      return next(ApiError.internal('User not authorized'))
    }

    try {
      const cart = await CartService.getCartWithProducts(user_id)
      return res.json(cart)
    } catch (error) {
      return next(error)
    }
  }

  async addCartProduct(req, res, next) {
    let {userId, productId, selectedSize, count} = req.body

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }
    if (!productId) {
      return next(ApiError.internal('Product id cannot be null'))
    }
    if (!selectedSize) {
      return next(ApiError.internal('Selected Size cannot be null'))
    }
    if (!count) {
      return next(ApiError.internal('Count cannot be null'))
    }

    count = parseInt(count)
    try {
      const cartProduct = await CartService.addCartProduct(userId, productId, selectedSize, count)
      return res.json(cartProduct)
    } catch (error) {
      return next(error)
    }
  }

  async updateCartProductCount(req, res, next) {
    const {userId, cartProductId, newCount} = req.body

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }
    if (!cartProductId) {
      return next(ApiError.internal('Cart Product Id cannot be null'))
    }
    if (!newCount) {
      return next(ApiError.internal('New count cannot be null'))
    }

    try {
      const cartProduct = await CartService.updateCartProductCount(userId, cartProductId, newCount)
      return res.json(cartProduct)
    } catch (error) {
      return next(error)
    }
  }

  async deleteCartProduct(req, res, next) {
    const {userId, cartProductId} = req.query

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }
    if (!cartProductId) {
      return next(ApiError.internal('Cart Product Id cannot be null'))
    }

    try {
      const cart = await CartService.deleteCartProduct(cartProductId, userId)
      return res.json(cart)
    } catch (error) {
      return next(error)
    }
  }

  async deleteCart(req, res, next) {
    let {userId} = req.body

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }

    try {
      const cart = await CartService.deleteCart(userId)
      return res.json(cart)
    } catch (error) {
      return next(error)
    }
  }

}

module.exports = new CartController()