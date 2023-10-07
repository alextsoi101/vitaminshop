const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
		if (req.method === "OPTIONS") {
			next()
		}
		try {
			const token = req.headers.authorization.split(' ')[1]
			if (!token) {
				return res.status(401).json({message: 'User is not authorized'})
			}
			const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY)

			if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE") {
				if (decoded.role === 'TESTADMIN') {
					return res.status(403).json({message: 'Test admin account cannot make any changes'})    
				}
			}

			if (decoded.role !== 'TESTADMIN' && decoded.role !== 'ADMIN') {
				return res.status(403).json({message: 'Do not have an access'})    
			}

			req.user = decoded;
			next()
		} catch (e) {
			res.status(401).json({message: 'User is not authorized'})
		}
	};