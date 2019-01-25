// //引入connect
// const {connect} = require('./database/init.js')
// //立即执行函数
// ;(async () =>{
//     await connect()
// })()
const Koa = require('koa');
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
// app.use(cors())


app.use(cors({
    origin: function (ctx) {
        // if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        // }
        // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'DELETE'],//["*"],//
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(bodyParser())

const Router = require('koa-router')
const {connect , initSchemas} = require('./database/init.js')
let user = require('./appApi/user.js')
let goods = require('./appApi/goods.js')
let category = require('./appApi/category.js')
let categorysub = require('./appApi/category_sub.js')
let router = new Router();
app.use(router.routes())
app.use(router.allowedMethods())
router.use('/user',user.routes())
router.use('/goods',goods.routes())
router.use('/category',category.routes())
router.use('/categorysub',categorysub.routes())
const mongoose = require('mongoose')
;(async () =>{
    await connect()
    initSchemas()
    // const User = mongoose.model('User')
    // let oneUser = new User({userName:'ttqqy12',password:'11123456'})
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let  users = await  User.find({}).exec()
    // console.log('------------------')
    // console.log(users)
    // console.log('------------------')
})()

app.listen(3000,()=>{
    console.log('start')
})