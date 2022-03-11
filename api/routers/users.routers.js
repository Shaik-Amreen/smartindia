const express= require('express');
var router = express.Router();
var register = require('../Controllers/users.controllers');

router.post('/createuser',register.createuser);
router.post('/finduser',register.finduser);
router.post('/findallusers',register.users);
router.post('/updatedetails',register.updatedetails);

module.exports=router;