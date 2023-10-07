const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const authAdminMiddleware = require('../middleware/authAdminMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/login-admin', userController.adminLogin)
router.get('/auth', authMiddleware, userController.check)
router.get('/auth-admin', authAdminMiddleware, userController.adminCheck)
router.get('/all', checkRoleMiddleware, userController.getAll)
router.get('/info/:userId', userController.getUserInfo)
router.get('/address/:userId', userController.getAddress)
router.get('/userstatistic', checkRoleMiddleware, userController.getUserStatistic)
router.post('/address', userController.createAddress)
router.put('/update', userController.updateUser)
router.put('/update-image', userController.updateUserImage)
router.delete('/delete-image/:userId', userController.deleteUserImage)
router.put('/newpassword', userController.changePassword)

module.exports = router;