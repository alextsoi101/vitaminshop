const Router = require('express');

const router = new Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.create);
router.get('/all', orderController.getAll);
router.get('/one/:id', orderController.getOne);
router.get('/user/:userId', orderController.getAllUserOrders);
router.get('/orderstatistic', orderController.getOrderStatistic);
router.get('/salestatistic', orderController.getSaleStatistic);
router.get('/lifetimeorders', orderController.getLifetimeOrders);
router.get('/lifetimesales', orderController.getLifetimeSales);

module.exports = router;