const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const purchasing = new Schema({
    typeid:{type:String,required:true,unique:true},
    from:{type:String,required:true},
    delivery:{type:String,required:true},
    date:{type:String,required:true},
    status:{type:String,required:true},
    typeofveg:{type:String,requird:true},
})

const Purchasing = mongoose.model('purchasing',purchasing);
module.exports=Purchasing;