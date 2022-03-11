const express= require('express');
var router = express.Router();
var purchase = require('../controllers/purchasingdetails.controllers');

router.post('/createpurchase',purchase.createpurchase);
router.post('/finddetails',purchase.finddetails);
router.post('/findid',purchase.findid);
router.post('/updatepurchasedetails',purchase.updatepurchasingdetails);

module.exports=router;