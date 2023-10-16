const ApiError = require('../error/ApiError');
const OrderService = require('../services/order-service');
const { validateEmail } = require('../helpers/validateEmail');

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

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return next(ApiError.internal('Incorrect Email'))
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
    let {id, email, limit, page} = req.query

    limit = limit || 10;
    page = page || 1;
    let offset = page * limit - limit;

    try {
      const ordersWithProducts = await OrderService.getAll(id, email, limit, offset);
      return res.json(ordersWithProducts)
    } catch (error) {
      return next(error)
    }
  }

  async getOne(req, res, next) {
    let {id} = req.params

    try {
      const orderWithProducts = await OrderService.getOne(id);
      return res.json(orderWithProducts)
    } catch (error) {
      return next(error)
    }
  }

  async getAllUserOrders(req, res, next) {
    let {userId} = req.params

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }

    try {
      const ordersWithProducts = await OrderService.getAllUserOrders(userId);
      return res.json(ordersWithProducts)
    } catch (error) {
      return next(error)
    }
  }

  async getOrderStatistic(req, res, next) {
    let {startDate, lastDate} = req.query

    if (!startDate) {
      return next(ApiError.internal('Start day cannot be empty'))
    }

    if (!lastDate) {
      return next(ApiError.internal('Last day cannot be empty'))
    }

    try {
      const orderStatistic = await OrderService.getOrderStatistic(startDate, lastDate);
      return res.json(orderStatistic)
    } catch (error) {
      return next(error)
    }
  }

  async getSaleStatistic(req, res, next) {
    let {startDate, lastDate} = req.query

    if (!startDate) {
      return next(ApiError.internal('Start day cannot be empty'))
    }

    if (!lastDate) {
      return next(ApiError.internal('Last day cannot be empty'))
    }

    try {
      const saleStatistic = await OrderService.getSaleStatistic(startDate, lastDate);
      return res.json(saleStatistic)
    } catch (error) {
      return next(error)
    }
  }

  async getLifetimeSales(req, res, next) {
    try {
      const lifetimeSales = await OrderService.getLifetimeSales();
      return res.json(lifetimeSales)
    } catch (error) {
      return next(error)
    }
  }

  async getLifetimeOrders(req, res, next) {
    try {
      const lifetimeOrders = await OrderService.getLifetimeOrders();
      return res.json(lifetimeOrders)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = new OrderController()
