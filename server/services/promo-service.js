const ApiError = require('../error/ApiError');
const {PromoCode, UsedPromo} = require('../db/models/models');
const { Op } = require("sequelize");

class PromoService {

  async create(promocode, percentDiscount, expirationDate) {
    const promo = await PromoCode.create({promocode, percentDiscount, expirationDate})
    return promo
  }

  async check(userId, promocode) {
    const promo = await PromoCode.findOne({where: {promocode}})
    if (!promo) {
      throw ApiError.badRequest(`Promocode doesn't exist`)
    }
    const promoUsed = await UsedPromo.findOne({
      where: {
        [Op.and]: [{userId}, {promocodeId: promo.id}] 
      }
    })
    if (promoUsed) {
      throw ApiError.badRequest(`Promocode alredy used`)
    }
    // await UsedPromo.create({userId, promocodeId: promo.id})
    return promo
  }

  async getOne(promocode) {
    const promo = await PromoCode.findOne({where: {promocode}})
    if (!promo) {
      throw ApiError.badRequest(`Promocode doesn't exist`)
    }
    return promo
  }

  async delete(userId, promocodeId) {
    
  }

}

module.exports = new PromoService()