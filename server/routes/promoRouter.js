const Router = require('express');
const router = new Router();
const promoController = require('../controllers/promoController');

router.post('/', promoController.create)
router.post('/check', promoController.check)
router.put('/', promoController.update)
router.get('/all', promoController.getAll)
router.get('/one/:promocode', promoController.getOne)

module.exports = router;