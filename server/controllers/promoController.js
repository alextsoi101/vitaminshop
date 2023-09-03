const ApiError = require('../error/ApiError');
const PromoService = require('../services/promo-service');

class promoController {
  async create(req, res, next) {
    let {promocode, percentDiscount, expirationDate} = req.body;

    if (!promocode) {
      return next(ApiError.internal('Promocode cannot be null'))
    }
    if (typeof promocode !== 'string') {
      return next(ApiError.internal('Promocode is not a string'))
    }
    if (!percentDiscount) {
      return next(ApiError.internal('Percent discount cannot be null'))
    }

    promocode = promocode.toLowerCase();

    try {
      const promo = await PromoService.create(promocode, percentDiscount, expirationDate)
      return res.json(promo)
    } catch (error) {
      return next(error)
    }
  }

  async check(req, res, next) {
    let {userId, promocode} = req.body

    if (!userId) {
      return next(ApiError.internal('Sign or login to use Promocodes'))
    }
    if (!promocode) {
      return next(ApiError.internal('Promocode cannot be null'))
    }
    if (typeof promocode !== 'string') {
      return next(ApiError.internal('Promocode is not a string'))
    }

    promocode = promocode.toLowerCase();

    try {
      const promo = await PromoService.check(userId, promocode)
      return res.json(promo)
    } catch (error) {
      return next(error)
    }
  }

  async getOne(req, res, next) {
    let {promocode} = req.params

    if (!promocode) {
      return next(ApiError.internal('Promocode cannot be null'))
    }

    try {
      const promo = await PromoService.getOne(promocode)
      return res.json(promo)
    } catch (error) {
      return next(error)
    }
  }

  async delete(req, res) {
    // ---
  }
}

module.exports = new promoController()