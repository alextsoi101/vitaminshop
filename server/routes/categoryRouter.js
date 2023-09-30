const Router = require('express');

const router = new Router()
const categoryController = require('../controllers/categoryController')

router.post('/', categoryController.create)
router.get('/all', categoryController.getAll)
router.get('/all-admin', categoryController.getAllAdmin)
router.get('/:id', categoryController.getOne)

module.exports = router;