const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
router.get('/insertAllCategory',async(ctx)=>{
    fs.readFile('./category.json','utf8',(err,data)=>{
        data = JSON.parse(data).RECORDS;
        let savecount = 0;
        const Category = mongoose.model('Category')
        data.map((value,index)=>{
            let newcategory = new Category(value)
            newcategory.save().then(()=>{
                savecount++;
                console.log('成功')
            })
            .catch(error=>{

            })
        })
    })
})
module.exports = router