const Router = require('express');
const promoController = require('../controllers/promoController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', checkRoleMiddleware, promoController.create)
router.post('/check', promoController.check)
router.put('/', checkRoleMiddleware, promoController.update)
router.get('/all', checkRoleMiddleware, promoController.getAll)
router.get('/one/:promocode', promoController.getOne)

module.exports = router;