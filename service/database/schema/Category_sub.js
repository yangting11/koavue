const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categroysubSchema = new Schema({
    ID:{unique:true,type:String},
    MALL_CATEGORY_ID:{type:String},
    MALL_SUB_NAME:{type:String},
    COMMENTS:{type:String},
    SORT:{type:Number}
},{
    collections:'Categorysub'
})
mongoose.model('Categorysub',categroysubSchema)