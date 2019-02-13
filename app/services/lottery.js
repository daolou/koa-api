const axios = require('axios');
const parser = require('xml2json');

const lottery = {
    async getList() {
        const {data} = await axios.get('http://malayalamexpress.in/newLotteryresults.xml', {
            transformResponse: [function (res) {
                // 对 res 进行任意转换处理
                const json = parser.toJson(res)
                return json;
            }]
        })
        // console.log(data)
        return data
    }
}

module.exports = lottery