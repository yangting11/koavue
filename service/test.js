const Koa = require('koa');
const app = new Koa()

app.use(async(ctx)=>{
    ctx.body = "你好"
})

app.listen(3000,()=>{
    console.log('start')
})