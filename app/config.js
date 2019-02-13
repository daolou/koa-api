const option = {
    development: {
        port: 3800,
    },
    production: {
        port: 3801,
    }
}
// console.log(process.env.NODE_ENV);
const config = option[process.env.NODE_ENV||'development']
module.exports = config