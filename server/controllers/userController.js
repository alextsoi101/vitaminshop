const ApiError = require('../error/ApiError');
const UserService = require('../services/user-service');
const { validateEmail } = require('../helpers/validateEmail');

class UserController {
  async registration(req, res, next) {
    const {email, password} = req.body

    const role = 'USER'

    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'))
    }
    if (typeof email !== "string") {
      return next(ApiError.internal('Email is not a string'))
    }
    if (typeof password !== "string") {
      return next(ApiError.internal('Password is not a string'))
    }

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return next(ApiError.internal('Incorrect Email'))
    }

    try {
      const token = await UserService.registration(email, password, role)
      return res.json({token})

    } catch (error) {
      return next(error)
    }
  }

  async login(req, res, next) {
    const {email, password} = req.body

    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'))
    }
    if (typeof email !== "string") {
      return next(ApiError.internal('Email is not a string'))
    }
    if (typeof password !== "string") {
      return next(ApiError.internal('Password is not a string'))
    }

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return next(ApiError.internal('Incorrect Email'))
    }

    try {
      const token = await UserService.login(email, password)
      return res.json({token})
      
    } catch (error) {
      return next(error)
    }
  }

  async adminLogin(req, res, next) {
    const {email, password} = req.body

    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'))
    }
    if (typeof email !== "string") {
      return next(ApiError.internal('Email is not a string'))
    }
    if (typeof password !== "string") {
      return next(ApiError.internal('Password is not a string'))
    }

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return next(ApiError.internal('Incorrect Email'))
    }

    try {
      const token = await UserService.adminLogin(email, password)
      return res.json({token})
      
    } catch (error) {
      return next(error)
    }
  }

  async check(req, res, next) {
    const userId = req.user.id
    const userEmail = req.user.email
    const userRole = req.user.role

    if (!userId) {
      return next(ApiError.badRequest('userId cannot be null'))
    }
    if (!userEmail) {
      return next(ApiError.badRequest('User Email cannot be null'))
    }
    if (!userRole) {
      return next(ApiError.badRequest('User Role cannot be null'))
    }

    try {
      const token = await UserService.check(userId, userEmail, userRole)
      return res.json({token})
    } catch (error) {
      return next(error)
    }
  }

  async adminCheck(req, res, next) {
    const adminId = req.admin.id
    const adminEmail = req.admin.email
    const adminRole = req.admin.role

    if (!adminId) {
      return next(ApiError.badRequest('adminId cannot be null'))
    }
    if (!adminEmail) {
      return next(ApiError.badRequest('Admin Email cannot be null'))
    }
    if (!adminRole) {
      return next(ApiError.badRequest('Admin Role cannot be null'))
    }

    try {
      const token = await UserService.adminCheck(adminId, adminEmail, adminRole)
      return res.json({token})
    } catch (error) {
      return next(error)
    }
  }

  async getAll(req, res, next) {
    let {userId, name, email, limit, page} = req.query

    limit = limit || 10;
    page = page || 1;
    let offset = page * limit - limit;

    try {
      const users = await UserService.getAll(userId, name, email, limit, offset);
      return res.json(users)
    } catch (error) {
      return next(error)
    }
  }

  async getUserInfo(req, res, next) {
    const {userId} = req.params

    if (!userId) {
      return next(ApiError.badRequest('User is not authorized'))
    }

    try {
      const user = await UserService.getUserInfo(userId)
      return res.json(user)
    } catch (error) {
      return next(error)
    }
  }

  async updateUser(req, res, next) {
    let {userId, email, firstName, lastName} = req.body

    if (!userId) {
      return next(ApiError.badRequest('User is not authorized'))
    }

    const validEmail = validateEmail(email)
    if (!validEmail && email !== null && email !== '' && email !== 'null') {
      return next(ApiError.internal('Incorrect Email'))
    }

    try {
      const updatedUser = await UserService.updateUser(userId, email, firstName, lastName)
      return res.json(updatedUser)
    } catch (error) {
      return next(error)
    }
  }

  async updateUserImage(req, res, next) {
    let {userId} = req.body;

    if (!userId) {
      return next(ApiError.badRequest('User is not authorized'))
    }

    let img;
    if (req.files) {
      let {userImage} = req.files
      img = userImage;
    } else {
      return next(ApiError.internal('Image cannot be null'))
    }

    let allowedExtensions = ['jpg', 'png', 'jpeg'];
    let fileNameParts = img.name.split('.');
    let fileExt = fileNameParts[fileNameParts.length - 1];

    if (!allowedExtensions.includes(fileExt)) {
      return next(ApiError.internal('Allowed extensions: JPG, JPEG, PNG'))
    }

    const imgBuffer = req.files.userImage.data;
    const imgBase64 = imgBuffer.toString('base64');

    const formData = new FormData();
    formData.append("key", process.env.IMAGE_HOSTING_API_KEY);
    formData.append("source", imgBase64);
    formData.append("format", "json");

    const {data} = await axios.post(process.env.IMAGE_API_UPLOAD_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })

    if (data.status_code !== 200) {
      return next(ApiError.internal(data.error.message))
    }

    let imageurl = data.image.url;

    try {
      const newImageUrl = await UserService.updateUserImage(userId, imageurl)
      return res.json(newImageUrl)
    } catch (error) {
      return next(error)
    }
  }

  async deleteUserImage(req, res, next) {
    let {userId} = req.params;

    if (!userId) {
      return next(ApiError.badRequest('User is not authorized'))
    }

    try {
      const deleteImage = await UserService.deleteUserImage(userId)
      return res.json(deleteImage)
    } catch (error) {
      return next(error)
    }
  }

  async changePassword(req, res, next) {
    let {userId, currentPassword, newPassword, passwordRepeat} = req.body

    if (!userId) {
      return next(ApiError.internal('User is not authorized'))
    }
    if (!currentPassword || currentPassword === '') {
      return next(ApiError.internal('Current password cannot be empty'))
    }
    if (!newPassword || newPassword === '') {
      return next(ApiError.internal('New password cannot be empty'))
    }
    if (!passwordRepeat || passwordRepeat === '') {
      return next(ApiError.internal('Password repeat cannot be empty'))
    }
    try {
      const updatedUser = await UserService.changePassword(userId, currentPassword, newPassword, passwordRepeat)
      return res.json(updatedUser)
    } catch (error) {
      return next(error)
    }
  }

  async createAddress(req, res, next) {
    let {userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip } = req.body

    if (!userId) {
      return next(ApiError.internal('User is not authorized'))
    }
    if (!firstName) {
      return next(ApiError.internal('Firstname cannot be empty'))
    }
    if (!lastName) {
      return next(ApiError.internal('Lastname cannot be empty'))
    }
    if (!country) {
      return next(ApiError.internal('Country cannot be empty'))
    }
    if (!addressLineOne) {
      return next(ApiError.internal('Address line one cannot be empty'))
    }
    if (!city) {
      return next(ApiError.internal('City cannot be empty'))
    }
    if (!state) {
      return next(ApiError.internal('State cannot be empty'))
    }
    if (!zip) {
      return next(ApiError.internal('Zip code cannot be empty'))
    }

    try {
      const address = await UserService.createAddress(
        userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip
      )
      return res.json(address)
    } catch (error) {
      return next(error.message)
    }
  }

  async getAddress(req, res, next) {
    let {userId} = req.params

    if (!userId) {
      return next(ApiError.internal('User is not authorized'))
    }
    
    try {
      const address = await UserService.getAddress(userId)
      return res.json(address)
    } catch (error) {
      return next(error.message)
    }
  }

  async getUserStatistic(req, res, next) {
    let {startDate, lastDate} = req.query

    if (!startDate) {
      return next(ApiError.internal('Start day cannot be empty'))
    }

    if (!lastDate) {
      return next(ApiError.internal('Last day cannot be empty'))
    }

    try {
      const userStatistic = await UserService.getUserStatistic(startDate, lastDate);
      return res.json(userStatistic)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = new UserController();