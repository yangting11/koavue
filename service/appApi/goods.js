const Koa = require('koa');
const app = new Koa()
const Router = require('koa-router')
let router = new Router()
const mongoose = require('mongoose');
const fs = require('fs')

router.get('/insertAllGoodsInfo',async(ctx)=>{
    fs.readFile('./goods.json','utf8',(err,data)=>{  //指向service下面
        // console.log()
        data = JSON.parse(data).RECORDS
        let saveCount = 0;
        const Goods = mongoose.model('Goods')
        data.map((value,index)=>{
            console.log('数据')
            let newgoods = new Goods(value)
            newgoods.save().then(()=>{
                saveCount++
                console.log('成功')
            }).catch(error=>{
                console.log('失败')
            })
        })
    })
    ctx.body = "开始导入数据"
})
router.post('/getDetailGoodsInfo',async(ctx)=>{
    let goodsId = ctx.request.body.goodsId;
    const Goods = mongoose.model('Goods');
    await Goods.find({ID:goodsId}).exec().then(async(result)=>{
        ctx.body={code:200,message:result}
    })
    .catch(error=>{
        console.log(error);
        ctx.body={
            code:500,
            message:error
        }
    })
})

module.exports = router;