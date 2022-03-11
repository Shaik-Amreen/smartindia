const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const previousdata = new Schema({
    districtprice:{type:Object,required:true},
    season:{type:String,required:true},
    vegetable:{type:String,required:true},
    harvestingtime:{type:String,required:true},
    //price:{type:String,required:true}
})

const Previousdata = mongoose.model('previousdata',previousdata);
module.exports=Previousdata;