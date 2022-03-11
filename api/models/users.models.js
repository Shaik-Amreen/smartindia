const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const register = new Schema({
    typeid:{type:String,required:true,unique:true},
    usertype:{type:String,required:true},
    address:{type:Object,required:true},
    mobileno:{type:String,required:true}
})

const users = mongoose.model('users',register);
module.exports=users;