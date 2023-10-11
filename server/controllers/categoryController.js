const ApiError = require('../error/ApiError');
const {Category, Product} = require('../db/models/models');

class CategoryController {
  async create(req, res, next) {
    let {name, description} = req.body

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
        include: [{
          model: Product, 
          as: 'products',
          attributes: ['id']
        }]
      })
      return res.json(categories)
    } catch (error) {
      return next(error)
    }
  }

  async getAllAdmin(req, res, next) {
    let {limit, page} = req.query

    limit = limit || 10;
    page = page || 1;
    let offset = page * limit - limit;

    try {
      const categories = await Category.findAndCountAll({order: [['id', 'DESC']], limit, offset})
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