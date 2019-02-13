const router = require('koa-router')()
const lotteryController = require('../controllers/lottery')

const routers = router
    .get('/lottery',lotteryController.getList)


module.exports = routers