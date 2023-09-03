const {Order, Cart, CartProduct, Product, OrderedProduct} = require('../db/models/models');

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

  async getAllOrders(userId) {
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
}

module.exports = new OrderService()