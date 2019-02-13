const lotteryService = require('../services/lottery')

module.exports = {
    async getList(ctx){
        try {
            const res = await lotteryService.getList()
            ctx.body = res
        } catch (err) {
            ctx.throw(500,err)
        }
    }
}