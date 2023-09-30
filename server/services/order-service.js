const {Order, Cart, CartProduct, Product, OrderedProduct} = require('../db/models/models');
const { Op, fn, col } = require("sequelize");

class OrderService {

  async create(
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
    total) {
    
    if (userId === 'non-authorized') {
      const order = await Order.create({
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
        shippingCost,
        total 
      })

      for (const product of orderedProducts) {
        const orderedProduct = await OrderedProduct.create({
          price: product.product.price,
          totalPrice: product.totalPrice,
          count: product.count,
          selectedSize: product.selectedSize,
          orderId: order.id,
          productId: product.product.id,
        })
      }
  
      const orderWithProducts = await Order.findOne({
        where: {id: order.id},
        include: [{
          model: OrderedProduct,
          as: 'orderedProducts',
          include: [{
            model: Product
          }]
        }]
      })
  
      return orderWithProducts;
    }

    const cart = await Cart.findOne({
      where: {userId},
      include: [{
        model: CartProduct,
        as: 'products',
        include: [{
          model: Product
        }]
      }]
    })

    const order = await Order.create({
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
      shippingCost,
      total
    })

    for (const cartProduct of cart.products) {
      const orderedProduct = await OrderedProduct.create({
        price: cartProduct.price,
        totalPrice: cartProduct.totalPrice,
        count: cartProduct.count,
        selectedSize: cartProduct.selectedSize,
        orderId: order.id,
        productId: cartProduct.product.id,
      })
    }

    const orderWithProducts = await Order.findOne({
      where: {id: order.id},
      include: [{
        model: OrderedProduct,
        as: 'orderedProducts',
        include: [{
          model: Product
        }]
      }]
    })

    return orderWithProducts;
  }

  async getAll(id, email, limit, offset) {

    if (!id && !email) {
      const orderWithProducts = await Order.findAndCountAll({
        order: [['id', 'DESC']], limit, offset
      })
      return orderWithProducts;
    }

    let parametersArray = [];

    if (id) {
      parametersArray.push({id: id})
    }

    if (email) {
      parametersArray.push({email: email})
    }

    const orderWithProducts = await Order.findAndCountAll({
      where: {
        [Op.or]: parametersArray
      },
      order: [['id', 'DESC']], limit, offset
    })
    return orderWithProducts;    
  }

  async getOne(id) {
    const orderWithProducts = await Order.findOne({
      where: {id},
      include: [{
        model: OrderedProduct,
        as: 'orderedProducts',
        include: [{
          model: Product
        }]
      }]
    })
    return orderWithProducts;
  }

  async getAllUserOrders(userId) {
    const orderWithProducts = await Order.findAll({
      where: {userId},
      include: [{
        model: OrderedProduct,
        as: 'orderedProducts',
        include: [{
          model: Product
        }]
      }]
    })
    return orderWithProducts;
  }

  async getOrderStatistic(startDate, lastDate) {

    try {
      const orderStatistic = await Order.findAll({
        where: {
          createdAt: { [Op.between]: [new Date(startDate), new Date(lastDate)] },
        },
        attributes: [
          'createdAt', 
          [fn('date_trunc', 'day', col('createdAt')), 'orderDay'],
          [fn('COUNT', col('id')), 'orderCount']
        ],
        group: 'createdAt',
        raw: true,
        right: false,
        order: [['createdAt', 'ASC']],
      })

      const orderCountMap = new Map();
      orderStatistic.forEach((row) => {
        orderCountMap.set(row.orderDay.toISOString().split('T')[0], row.orderCount);
      });

      const generateDateArray = (startDay, lastDay) => {
        const dates = [];
        const startDate = new Date(startDay);
        const lastDate = new Date(lastDay);
      
        while (startDate <= lastDate) {
          dates.push(new Date(startDate));
          startDate.setDate(startDate.getDate() + 1);
        }
      
        return dates;
      }

      const dates = generateDateArray(startDate, lastDate)

      const orderCounts = dates.map((date) => ({
        date: date.toISOString().split('T')[0],
        count: orderCountMap.get(date.toISOString().split('T')[0]) || 0,
      }));
    
      return orderCounts;
    }
    catch (e) {
      console.error(e)
    }
  }

  async getSaleStatistic(startDate, lastDate) {

    try {
      const orderStatistic = await Order.findAll({
        where: {
          createdAt: { [Op.between]: [new Date(startDate), new Date(lastDate)] },
        },
        attributes: [
          'createdAt', 
          [fn('date_trunc', 'day', col('createdAt')), 'saleDay'],
          [fn('sum', col('total')), 'total']
        ],
        group: 'createdAt',
        raw: true,
        right: false,
        order: [['createdAt', 'ASC']],
      })

      const orderCountMap = new Map();
      orderStatistic.forEach((row) => {
        orderCountMap.set(row.saleDay.toISOString().split('T')[0], row.total);
      });

      const generateDateArray = (startDay, lastDay) => {
        const dates = [];
        const startDate = new Date(startDay);
        const lastDate = new Date(lastDay);
      
        while (startDate <= lastDate) {
          dates.push(new Date(startDate));
          startDate.setDate(startDate.getDate() + 1);
        }
      
        return dates;
      }

      const dates = generateDateArray(startDate, lastDate)

      const salesByDay = dates.map((date) => ({
        date: date.toISOString().split('T')[0],
        total: orderCountMap.get(date.toISOString().split('T')[0]) || 0,
      }));
    
      return salesByDay;
    }
    catch (e) {
      console.error(e)
    }
  }

  async getLifetimeOrders() {
    const authOrders = await Order.findAll({
      where: {
        userId: {[Op.ne]: null} 
      },
      attributes: [
        [fn('COUNT', col('id')), 'orders']
      ],
      raw: true
    })

    const nonAuthOrders = await Order.findAll({
      where: {
        userId: {[Op.eq]: null} 
      },
      attributes: [
        [fn('COUNT', col('id')), 'orders']
      ],
      raw: true
    })

    return {
      authOrders: authOrders[0].orders,
      nonAuthOrders: nonAuthOrders[0].orders
    };
  }
  
  async getLifetimeSales() {
    const lifetimeSales = await Order.findAll({
      attributes: [
        [fn('sum', col('total')), 'total']
      ],
    })

    return lifetimeSales;
  }
}

module.exports = new OrderService()