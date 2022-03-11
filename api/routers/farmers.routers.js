const express= require('express');
var router = express.Router();
var farmer = require('../controllers/farmers.controllers');

router.post('/createfarmer',farmer.createfarmer);
router.post('/finddetails',farmer.finddetails);
router.post('/findid',farmer.findid);
router.post('/updatefarmerdetails',farmer.updatefarmerdetails);

module.exports=router;