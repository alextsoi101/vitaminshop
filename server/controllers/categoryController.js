const ApiError = require('../error/ApiError');
const {Category, Product} = require('../db/models/models');

class CategoryController {
  async create(req, res, next) {
    const {name, description} = req.body

    if (!name) {
      return next(ApiError.internal('Name cannot be null'))
    }

    if (!description) {
      return next(ApiError.internal('Description cannot be null'))
    }

    try {
      const category = await Category.create({name, description})
      return res.json(category)
    } catch (error) {
      return next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const categories = await Category.findAll({
        order: [['id', 'ASC']],
        include: [{model: Product, as: 'products'}]
      })
      return res.json(categories)
    } catch (error) {
      return next(error)
    }
  }

  async getOne(req, res, next) {
    const {id} = req.params

    if (!id) {
      return next(ApiError.internal('Id cannot be null'))
    }

    try {
      const category = await Category.findOne({
        where: {id}
      })

      if (!category) {
        return next(ApiError.internal('Category doesnt exsist'))
      }

      return res.json(category)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = new CategoryController()