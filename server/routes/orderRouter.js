const Router = require('express');
const orderController = require('../controllers/orderController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', orderController.create);
router.get('/all', checkRoleMiddleware, orderController.getAll);
router.get('/one/:id', orderController.getOne);
router.get('/user/:userId', orderController.getAllUserOrders);
router.get('/orderstatistic', checkRoleMiddleware, orderController.getOrderStatistic);
router.get('/salestatistic', checkRoleMiddleware, orderController.getSaleStatistic);
router.get('/lifetimeorders', checkRoleMiddleware, orderController.getLifetimeOrders);
router.get('/lifetimesales', checkRoleMiddleware, orderController.getLifetimeSales);

module.exports = router;