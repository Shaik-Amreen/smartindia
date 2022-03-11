const express= require('express');
var router = express.Router();
var previousdata = require('../controllers/previousdata.controllers');

router.post('/finddetails',previousdata.finddetails);
module.exports=router;