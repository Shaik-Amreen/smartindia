const register = require('../models/users.models');

exports.createuser=(req,res)=>{
    register.create(req.body,(err,docs)=>{
        console.log(err,docs)
        if(err)
        {
            console.log(req.body)
            res.send({message:'error'})
        }
        else
        {
            res.send({message:'success'})
        }
    })
}

exports.users=(req,res)=>{
    register.find((err,docs)=>{
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

exports.finduser=(req,res)=>{
    register.findOne({typeid:req.body.typeid},(err,docs)=>{
        if(err)
        {
            console.log(req.body,err);
            res.send({message:'error'})
        }
        else
        {
           res.send(docs)

        }

    })
}

exports.updatedetails=(req,res)=>{
    register.updateMany({typeid:req.body.typeid},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(req.body,err);
            res.send({message:'err'});
        }
        else
        {
            res.send({message:'success'})
        }
    })
}