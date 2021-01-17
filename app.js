var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require('cors')
var indexroutes = require("./routes/index");
var shoproutes = require("./routes/shop");
var seed = require('./seed')

mongoose.connect("mongodb://localhost/mernShop",{ useNewUrlParser: true,useUnifiedTopology: true  })

// seed();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.get('/', function(req,res){
    res.send('Hi');
})
app.use(indexroutes);
app.use(shoproutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("MERN Shop app server has started");
});