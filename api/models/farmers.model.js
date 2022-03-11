const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const farmers = new Schema({
    typeid:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    price:{type:Object,required:true},
    discount:{type:Object,required:true},
})

const Farmers = mongoose.model('farmers',farmers);
module.exports=Farmers;