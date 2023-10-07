const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer + ' ' + token
    if (!token) {
      return res.status(401).json({message: "User is not authorized"})
    }
    const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY)
    req.admin = decoded
    next()
  } catch (e) {
    res.status(401).json({message: "User is not authorized"})
  }
};