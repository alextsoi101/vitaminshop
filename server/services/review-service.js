const {Review, Product, User} = require('../db/models/models');
const { Op } = require("sequelize");

class ReviewService {
  async create(userId, productId, name, rate, review) {
    const createdReview = await Review.create(
      {userId, productId, name, rate, review}
    );

    const rateSum = await Review.sum('rate', {where: {productId}})
    const reviewCount = await Review.count({where: {productId}})
    const newRating = Math.round(rateSum / reviewCount)

    await Product.update(
      {rating: newRating},
      {where: {id: productId}}
    )
    const reviewWithUser = await Review.findOne({
      where: {id: createdReview.id},
      include: [{model: User}]
    }) 
    return reviewWithUser
  }

  async getProductReviews(productId) {
    const reviews = await Review.findAll({
      where: {productId},
      include: [{model: User}]
    })
    return reviews
  }

  async getAll(limit) {
    const reviews = await Review.findAll({
      order: [['createdAt', 'DESC']],
      include: [{model: User}], 
      limit: limit
    })
    return reviews
  }

}

module.exports = new ReviewService();