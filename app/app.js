// const http = require('http')
const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const koaError = require('koa-error')


const config = require('./config')
const routers = require('./routers/index')

const app = new Koa()

// 配置控制台日志中间件
app.use(convert(koaLogger()))

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname,'./views'),{
    map: {
        html: 'nunjucks'
    }
}))

app.use(koaError({
    engine: 'nunjucks',
    template: path.join(__dirname,'./views/error.html')
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


// http.createServer(app.callback()).listen(config.port)
app.on('error', function(err, ctx){
    console.log(err);
});

// 监听启动端口
// console.log(config);
app.listen(config.port)
console.log(`the server is start at port ${config.port}`)