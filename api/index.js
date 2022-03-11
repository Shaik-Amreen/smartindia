const express = require('express');
require('./database/database');
const cors = require("cors");
var app = express();

const farmer = require('./routers/farmers.routers');

const purchase = require('./routers/purchasingdetails.routers');
const user = require('./routers/users.routers');
const Previousdata = require('./routers/previousdata.routers');
app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use('/farmer', farmer);
app.use('/purchase', purchase);
app.use('/user', user);
app.use('/previousdata', Previousdata)
app.listen(4000, () => console.log("server connected"));