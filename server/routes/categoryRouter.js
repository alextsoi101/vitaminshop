const Router = require('express');
const categoryController = require('../controllers/categoryController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router()

router.post('/', checkRoleMiddleware, categoryController.create)
router.get('/all', categoryController.getAll)
router.get('/all-admin', checkRoleMiddleware, categoryController.getAllAdmin)
router.get('/:id', categoryController.getOne)

module.exports = router;