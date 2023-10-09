const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  firstname: {type: DataTypes.STRING},
  lastname: {type: DataTypes.STRING},
  image: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Address = sequelize.define('address', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  firstname: {type: DataTypes.STRING, allowNull: false},
  lastname: {type: DataTypes.STRING, allowNull: false},
  country: {type: DataTypes.STRING, allowNull: false},
  addressLineOne: {type: DataTypes.STRING, allowNull: false},
  addressLineTwo: {type: DataTypes.STRING},
  city: {type: DataTypes.STRING, allowNull: false},
  state: {type: DataTypes.STRING, allowNull: false},
  zip: {type: DataTypes.STRING, allowNull: false},
})


const Cart = sequelize.define('cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  subTotal: {type: DataTypes.INTEGER, defaultValue: 0},
})

const CartProduct = sequelize.define('cart_product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
  selectedSize: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  totalPrice: {type: DataTypes.INTEGER, allowNull: false},
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  images: {type: DataTypes.ARRAY(DataTypes.STRING)},
  name: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 5},
  effects: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  relieve: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  ingridients: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  sizes: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  shortDescription: {type: DataTypes.STRING, allowNull: false},
  instock: {type: DataTypes.BOOLEAN, defaultValue: true}
})

const Category = sequelize.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false}
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Review = sequelize.define('review', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  rate: {type: DataTypes.INTEGER, allowNull: false},
  review: {type: DataTypes.STRING, allowNull: false},
})

const Order = sequelize.define('order', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, allowNull: false},
  firstName: {type: DataTypes.STRING, allowNull: false},
  lastName: {type: DataTypes.STRING, allowNull: false},
  country: {type: DataTypes.STRING, allowNull: false},
  addressLineOne: {type: DataTypes.STRING, allowNull: false},
  addressLineTwo: {type: DataTypes.STRING},
  city: {type: DataTypes.STRING, allowNull: false},
  state: {type: DataTypes.STRING, allowNull: false},
  zip: {type: DataTypes.STRING, allowNull: false},
  phone: {type: DataTypes.STRING},
  notes: {type: DataTypes.STRING},
  shippingCost: {type: DataTypes.INTEGER, defaultValue: 50, allowNull: false},
  total: {type: DataTypes.INTEGER, allowNull: false},
})

const OrderedProduct = sequelize.define('orderedProduct', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
  selectedSize: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  totalPrice: {type: DataTypes.INTEGER, allowNull: false},
})

const PromoCode = sequelize.define('promocode', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  promocode: {type: DataTypes.STRING, allowNull: false},
  percentDiscount: {type: DataTypes.INTEGER, allowNull: false},
  expirationDate: {type: DataTypes.DATE},
})

const UsedPromo = sequelize.define('usedpromo', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ProductCategory = sequelize.define('product_category')

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Address)
Address.belongsTo(User)

Cart.hasMany(CartProduct, {as: 'products'})
CartProduct.belongsTo(Cart)

Product.hasMany(CartProduct)
CartProduct.belongsTo(Product)

Order.hasMany(OrderedProduct)
OrderedProduct.belongsTo(Order)

Product.hasMany(OrderedProduct)
OrderedProduct.belongsTo(Product)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Review)
Review.belongsTo(User)

Review.hasOne(Rating)
Rating.belongsTo(Review)

User.hasMany(Order)
Order.belongsTo(User)

PromoCode.hasMany(UsedPromo)
UsedPromo.belongsTo(PromoCode)

User.hasMany(UsedPromo)
UsedPromo.belongsTo(User)

Category.belongsToMany(Product, { through: ProductCategory });
Product.belongsToMany(Category, { through: ProductCategory });

module.exports = {
  User,
  Address,
  Cart,
  CartProduct,
  Product,
  Category,
  Rating,
  Review,
  ProductCategory,
  Order,
  OrderedProduct,
  PromoCode,
  UsedPromo
}