const ApiError = require('../error/ApiError');
const {Product, Category, ProductCategory, Review} = require('../db/models/models');
const { Op } = require("sequelize");

class ProductService {
  async create(
    categoriesId, 
    name, 
    price, 
    rating, 
    sizes, 
    effects, 
    relieve, 
    ingridients, 
    description, 
    shortDescription, 
    images,
    instock ) {
    const product = await Product.create({
      name, price, rating, sizes, effects, relieve, ingridients, description, shortDescription, images, instock
    })

    categoriesId.forEach(categoryId => {
      product.addCategory(categoryId)
    })

    return product
  }

  async update(
    id,
    categoriesId, 
    name, 
    price, 
    rating, 
    sizes, 
    effects, 
    relieve, 
    ingridients, 
    description, 
    shortDescription, 
    images,
    instock ) {

    const product = await Product.findByPk(id);

    if (!product) {
      throw ApiError.internal('Product not found')
    }
    
    await product.update(
      {
        name, price, rating, sizes, effects, relieve, ingridients, description, shortDescription, images, instock
      }, 
      { where: {id} }
    );

    return product.setCategories(categoriesId);
  }

  async getAll(categoryId, limit, offset, minPrice, maxPrice, rate, sortBy, inStock) {
    let products;

    if (categoryId) {
      const productCategoryArray = await ProductCategory.findAll({where: {categoryId}})
      let productsIdArray;

      switch (sortBy) {
        case 'default':
          productsIdArray = [];
          productCategoryArray.map(item => productsIdArray.push(item.productId))

          if (inStock === 'all') {
            products = await Product.findAndCountAll(
              {
                order: [['createdAt', 'DESC']],
                include: [
                  {model: Category, as: 'categories'},
                  {model: Review, as: 'reviews'}
                ],
                distinct: true,
                where: { 
                  [Op.and]: [
                    {id: productsIdArray},
                    {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                    {rating: {[Op.or]: rate}},
                  ]          
                }, limit, offset
              })
          } else {
            products = await Product.findAndCountAll(
              {
                order: [['createdAt', 'DESC']],
                include: [
                  {model: Category, as: 'categories'},
                  {model: Review, as: 'reviews'}
                ],
                distinct: true,
                where: { 
                  [Op.and]: [
                    {id: productsIdArray},
                    {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                    {rating: {[Op.or]: rate}},
                    {instock: inStock}
                  ]          
                }, limit, offset
              })
          }

          break;

        case 'newest':
          productsIdArray = [];
          productCategoryArray.map(item => productsIdArray.push(item.productId))
          products = await Product.findAndCountAll(
            {
              order: [['createdAt', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {id: productsIdArray},
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'rating':
          productsIdArray = [];
          productCategoryArray.map(item => productsIdArray.push(item.productId))
          products = await Product.findAndCountAll(
            {
              order: [['rating', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {id: productsIdArray},
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'pricelow':
          productsIdArray = [];
          productCategoryArray.map(item => productsIdArray.push(item.productId))
          products = await Product.findAndCountAll(
            {
              order: [['price', 'ASC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {id: productsIdArray},
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'pricehigh':
          productsIdArray = [];
          productCategoryArray.map(item => productsIdArray.push(item.productId))
          products = await Product.findAndCountAll(
            {
              order: [['price', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {id: productsIdArray},
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;
      }
      // if (products.count === 0) {
      //   throw ApiError.badRequest('Something went wrong')
      // }
      return products
    }

    if (!categoryId) { 
      switch (sortBy) {
        case 'default':
          if (inStock === 'all') {
            products = await Product.findAndCountAll(
              {
                order: [['createdAt', 'DESC']],
                include: [
                  {model: Category, as: 'categories'},
                  {model: Review, as: 'reviews'}
                ],
                distinct: true,
                where: { 
                  [Op.and]: [
                    {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                    {rating: {[Op.or]: rate}},
                  ]          
                }, limit, offset
              })
          } else {
            products = await Product.findAndCountAll(
              {
                order: [['createdAt', 'DESC']],
                include: [
                  {model: Category, as: 'categories'},
                  {model: Review, as: 'reviews'}
                ],
                distinct: true,
                where: { 
                  [Op.and]: [
                    {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                    {rating: {[Op.or]: rate}},
                    {instock: inStock}
                  ]          
                }, limit, offset
              })
          }

          break;

        case 'newest':
          products = await Product.findAndCountAll(
            {
              order: [['createdAt', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'rating':
          products = await Product.findAndCountAll(
            {
              order: [['rating', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'pricelow':
          products = await Product.findAndCountAll(
            {
              order: [['price', 'ASC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;

        case 'pricehigh':
          products = await Product.findAndCountAll(
            {
              order: [['price', 'DESC']],
              include: [
                {model: Category, as: 'categories'},
                {model: Review, as: 'reviews'}
              ],
              distinct: true,
              where: { 
                [Op.and]: [
                  {price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}},
                  {rating: {[Op.or]: rate}}
                ]          
              }, limit, offset
          })

          break;
      }
      // if (products.count === 0) {
      //   throw ApiError.badRequest('Something went wrong')
      // }
      return products
    }
  }

  async getAllAdmin(categoryId, name, limit, offset, minPrice, maxPrice, inStock) {

    let parametersArray = [];

    if (categoryId) {
      const productCategoryArray = await ProductCategory.findAll({where: {categoryId}})
      let productsIdArray = [];
      productCategoryArray.map(item => productsIdArray.push(item.productId))
      parametersArray.push({id: productsIdArray})
    }

    if (name) {
      parametersArray.push({name: {[Op.like]: `%${name}%`}})
    }

    if (maxPrice & minPrice) {
      parametersArray.push({price: {[Op.lt]: maxPrice, [Op.gt]: minPrice}})
    }

    if (inStock !== 'all') {
      parametersArray.push({instock: inStock})
    }

    const products = await Product.findAndCountAll(
      {
        order: [['id', 'DESC']],
        include: [
          {model: Category, as: 'categories'},
        ],
        distinct: true,
        where: { 
          [Op.and]: parametersArray
        }, limit, offset
      }
    );
    return products
  }

  async getOne(id) {
    const product = await Product.findOne({
      where: {id},
      include: [{
        model: Category,
        as: 'categories'
      }]
    })

    if (!product) {
      throw ApiError.badRequest('Product is not exists')
    }

    return product
  }

  async search(text) {
    const products = await Product.findAll({
      where: {
        name: {[Op.like]: `%${text}%`}
      },
      limit: 3
    })
    return products
  }
}

module.exports = new ProductService();