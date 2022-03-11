const Farmers = require('../models/farmers.model');

exports.createfarmer=(req,res)=>{
    Farmers.create(req.body,(err,docs)=>{
        console.log(err,docs)
        if(err)
        {
            console.log(req.body)
            console.log(err)
            res.send({message:'error'})
        }
        else
        {
            res.send({message:'success'})
        }
    })
}

exports.finddetails=(req,res)=>{
    Farmers.find((err,docs)=>{
        if(err)
        {
            console.log(req.body)
            res.send({message:"error"})
        }
        else
        {
            res.send(docs)
        }
    })
}

exports.findid=(req,res)=>{
    Farmers.findOne({typeid:req.body.typeid},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
           console.log({message:'success'})
           res.send(docs)

        }

    })
}

exports.updatefarmerdetails=(req,res)=>{
    Farmers.updateMany({typeid:req.body.typeid},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(err);
            res.send({message:'error'});
        }
        else
        {
            res.send({message:'success'})
        }
    })
}