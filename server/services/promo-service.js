const ApiError = require('../error/ApiError');
const {PromoCode, UsedPromo} = require('../db/models/models');
const { Op } = require("sequelize");

class PromoService {

  async create(promocode, percentDiscount, expirationDate) {
    const promo = await PromoCode.create({promocode, percentDiscount, expirationDate})
    return promo
  }

  async update(id, promocode, percentDiscount, expirationDate) {
    const promo = await PromoCode.findByPk(id)
    if (!promo) {
      throw ApiError.badRequest(`Promocode doesn't exist`)
    }

    await promo.update(
    {
      promocode, percentDiscount, expirationDate
    }, 
    { where: {id} })
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

  async getAll(limit, offset) {
    const promocodes = await PromoCode.findAndCountAll({order: [['id', 'DESC']], limit, offset})
    return promocodes
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