const Previousdata = require('../models/previousdata.model');

exports.finddetails=(req,res)=>{
    Previousdata.find((err,docs)=>{
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
