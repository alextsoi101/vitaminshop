const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User, Cart, Address} = require('../db/models/models');
const { Op } = require("sequelize");

const SECRET_KEY = 'mysecretkey';

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role}, SECRET_KEY, {expiresIn: '24h'}
  )
}

class UserService {
  async registration(email, password, role) {
    const userExists = await User.findOne({where: {email}})
    if (userExists) {
      throw ApiError.badRequest('User already exists')
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, password: hashPassword, role})
    const cart = await Cart.create({userId: user.id})
    const token = generateJwt(user.id, user.email, user.role)

    return token
  }

  async login(email, password) {
    const user = await User.findOne({where: {email}})
    if (!user) {
      throw ApiError.internal('User is not found')
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      throw ApiError.internal('Incorrect password')
    }
    const token = generateJwt(user.id, user.email, user.role)

    return token
  }

  async check(userId, userEmail, userRole) {
    const token = generateJwt(userId, userEmail, userRole)
    return token
  }

  async getAll(userId, name, email, limit, offset) {

    if (!userId && !name && !email) {
      const users = await User.findAndCountAll({ order: [['id', 'DESC']], limit, offset })
      return users
    }

    let parametersArray = [];

    if (userId) {
      parametersArray.push({id: userId})
    }
    if (name) {
      parametersArray.push({firstname: name})
      parametersArray.push({lastname: name})
    }
    if (email) {
      parametersArray.push({email: email})
    }

    const users = await User.findAndCountAll({
      order: [['id', 'DESC']], 
      where: { 
        [Op.or]: parametersArray          
      }, limit, offset
    })
    return users
  }

  async getUserInfo(userId) {
    const user = await User.findOne({where: {id: userId}})
    return user
  }

  async updateUser(userId, email, firstName, lastName) {
    let valuesToUpdate = {};

    if (email && email !== 'null' && email !== '') {
      valuesToUpdate.email = email
    }

    if (firstName && firstName !== 'null' && firstName !== '') {
      valuesToUpdate.firstname = firstName
    }

    if (lastName && lastName !== 'null' && lastName !== '') {
      valuesToUpdate.lastname = lastName
    }

    await User.update(
      valuesToUpdate, 
      {where: {id: userId}} 
    )

    const updatedUser = await User.findOne({where: {id: userId}})
    return updatedUser
  }

  async updateUserImage(userId, imageurl) {
    await User.update(
      {image: imageurl}, 
      {where: {id: userId}} 
    )
    return filename
  }

  async deleteUserImage(userId) {
    await User.update(
      {image: null}, 
      {where: {id: userId}} 
    )
    return null
  }

  async changePassword(userId, currentPassword, newPassword, passwordRepeat) {
    const user = await User.findOne({where: {id: userId}})

    let comparePassword = bcrypt.compareSync(currentPassword, user.password)
    if (!comparePassword) {
      throw ApiError.internal('Incorrect current password')
    }
    if (newPassword !== passwordRepeat) {
      throw ApiError.internal('Passwords do not match')
    }

    const hashPassword = await bcrypt.hash(newPassword, 5)
    await User.update(
      {password: hashPassword}, 
      {where: {id: userId}} 
    )
    const updatedUser = await User.findOne({where: {id: userId}})
    return updatedUser
  }

  async createAddress(
    userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip
  ) {
    const addressExist = await Address.findOne({where: {userId}})
    if (!addressExist) {
      const address = await Address.create({
        userId, 
        firstname: firstName, 
        lastname: lastName, 
        country, 
        addressLineOne, 
        addressLineTwo, 
        city, 
        state, 
        zip
      })
      return address
    } 
    else {
      await Address.update(
        {
          firstname: firstName,
          lastname: lastName, 
          country, 
          addressLineOne, 
          addressLineTwo, 
          city, 
          state, 
          zip,
        },
        {where: {userId}}
      )
      const updatedAddress = await Address.findOne({where: {userId}})
      return updatedAddress;
    }
    
  }

  async getAddress(userId) {
    const address = await Address.findOne({where: {userId}})
    return address
  }

  async getUserStatistic(startDate, lastDate) {
    try {
      const userStatistic = await User.findAll({
        where: {
          createdAt: { [Op.between]: [new Date(startDate), new Date(lastDate)] },
        },
        attributes: [
          'createdAt', 
          [fn('date_trunc', 'day', col('createdAt')), 'registrationDay'],
          [fn('COUNT', col('id')), 'userCount']
        ],
        group: 'createdAt',
        raw: true,
        right: false,
        order: [['createdAt', 'ASC']],
      })

      const userCountMap = new Map();
      userStatistic.forEach((row) => {
        userCountMap.set(row.registrationDay.toISOString().split('T')[0], row.userCount);
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

      const newUsersByDay = dates.map((date) => ({
        date: date.toISOString().split('T')[0],
        total: userCountMap.get(date.toISOString().split('T')[0]) || 0,
      }));
    
      return newUsersByDay;
    }
    catch (e) {
      console.error(e)
    }
  }

  async deleteUser(req, res) {
    const {id} = req.params
    const user = await User.findOne({where: {id}})
    return user
  }
}

module.exports = new UserService();