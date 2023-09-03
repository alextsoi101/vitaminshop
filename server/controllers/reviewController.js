const ApiError = require('../error/ApiError');
const ReviewService = require('../services/review-service');

class ReviewController {

  async create(req, res, next) {
    let {userId, productId, name, rate, review} = req.body

    if (!userId) {
      return next(ApiError.internal('User not authorized'))
    }
    if (!productId) {
      return next(ApiError.internal('Product Id cannot be null'))
    }
    if (!name) {
      return next(ApiError.internal('Name cannot be null'))
    }
    if (!rate) {
      return next(ApiError.internal('Rate cannot be null'))
    }
    if (!review) {
      return next(ApiError.internal('Review cannot be null'))
    }

    try {
      const createdReview = await ReviewService.create(userId, productId, name, rate, review)
      return res.json(createdReview)
    } catch (error) {
      return next(error)
    }
  }

  async getProductReviews(req, res, next) {
    let {product_id} = req.params

    if (!product_id) {
      return next(ApiError.internal('Product Id cannot be null'))
    }

    try {
      const reviews = await ReviewService.getProductReviews(product_id)
      return res.json(reviews)
    } catch (error) {
      return next(error)
    }
  }

  async getAll(req, res, next) {
    let {limit} = req.params

    if (!limit) {
      return next(ApiError.internal('Limit Id cannot be null'))
    }

    try {
      const reviews = await ReviewService.getAll(limit)
      return res.json(reviews)
    } catch (error) {
      return next(error)
    }
  }

}

module.exports = new ReviewController()