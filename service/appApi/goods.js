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
router.get('/getCategoryList',async(ctx)=>{
    try{
        const Category = mongoose.model('Category');
        let result = await Category.find().exec();
        ctx.body = {
            code:200,
            message:result
        }
    }catch(err){
        ctx.body = {
            code:500,
            message:err
        }
    }
})
router.get('/getCategorySubList',async(ctx)=>{
    try{
        //let categoryId = ctx.request.body.categoryId
        let categoryId = 1
        const CategorySub = mongoose.model('CategorySub')
        let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
})
router.get('/getGoodsListByCategorySubID',async(ctx)=>{
    try{
        //let categorySubId = ctx.request.body.categoryId
        let categorySubId = '2c9f6c946016ea9b016016f79c8e0000'
        const Goods = mongoose.model('Goods')
        let result = await Goods.find({SUB_ID:categorySubId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
})
module.exports = router;