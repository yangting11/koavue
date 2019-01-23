const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router()
const mongoose = require('mongoose');
const fs = require('fs')
router.get('/insertAllCategorySub',async(ctx)=>{
    fs.readFile('./category_sub.json','utf8',(err,data)=>{
        data = JSON.parse(data).RECORDS;
        const Category = mongoose.model('Category');
        let savecount = 0
        data.map((value,index)=>{
            let newcategorysub = new Category(value);
            newcategorysub.save().then(()=>{
                savecount++
                console.log('成功')
            }).catch(error=>{
                console.log(error)
            })
        })
    })
})
module.exports = router