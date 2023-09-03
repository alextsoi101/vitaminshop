const ApiError = require('../error/ApiError');
const OrderService = require('../services/order-service');

class OrderController {

  async create(req, res, next) {
    let {
      userId,
      email, 
      firstName, 
      lastName, 
      country, 
      addressLineOne, 
      addressLineTwo, 
      city,
      state,
      zip,
      phone,
      notes,
      orderedProducts,
      shippingCost,
      total } = req.body

    userId = userId || 'non-authorized'
    orderedProducts = orderedProducts || ''

    if (!email) {
      return next(ApiError.badRequest('Email cannot be empty'))
    }
    if (!firstName || !lastName) {
      return next(ApiError.badRequest('Firstname and lastname cannot be empty'))
    }
    if (!country) {
      return next(ApiError.badRequest('Country cannot be empty'))
    }
    if (!addressLineOne) {
      return next(ApiError.badRequest('Address line one cannot be empty'))
    } 
    if (!city) {
      return next(ApiError.badRequest('City cannot be empty'))
    } 
    if (!zip) {
      return next(ApiError.badRequest('ZIP-code cannot be empty'))
    } 

    try {
      const order = await OrderService.create(
        userId,
        email, 
        firstName, 
        lastName, 
        country, 
        addressLineOne, 
        addressLineTwo, 
        city,
        state,
        zip,
        phone,
        notes,
        orderedProducts,
        shippingCost,
        total)
      return res.json(order)
    } catch (error) {
      return next(error)
    }
  }

  async getAll(req, res, next) {
    let {userId} = req.params

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }

    try {
      const ordersWithProducts = await OrderService.getAllOrders(userId);
      return res.json(ordersWithProducts)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = new OrderController()
