const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kavya:kavya@cluster0.6ye89.mongodb.net/firstdatabase?retryWrites=true&w=majority",err=>{
    if(err)
    {
        console.log("Error while connecting to mongodb"+err)
    }
    else
    {
       console.log("mongodb connected")
    }
})