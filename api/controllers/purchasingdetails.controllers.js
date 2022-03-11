const purchase = require('../models/purchasingdetails.model');

exports.createpurchase=(req,res)=>{
    purchase.create(req.body,(err,docs)=>{
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

exports.finddetails=(req,res)=>{
    purchase.find((err,docs)=>{
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
    purchase.findOne({typeid:req.body.typeid},(err,docs)=>{
        if(err)
        {
            console.log(req.body);
            res.send({message:'success'})
        }
        else
        {
           console.log(docs)
           res.send(docs)

        }

    })
}

exports.updatepurchasingdetails=(req,res)=>{
    purchase.updateMany({typeid:req.body.typeid},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(req.body);
            res.send({message:'error'});
        }
        else
        {
            res.send({message:'success'})
        }
    })
}