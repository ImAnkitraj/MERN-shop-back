var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require('cors')
var indexroutes = require("./routes/index");
var shoproutes = require("./routes/shop");
var seed = require('./seed')

mongoose.connect("mongodb://localhost:27017/shop?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>console.log('connected'))
.catch(e=>console.log(e))
// mongoose.connect("mongodb+srv://ankit:passraj@aimusic-es8pe.mongodb.net/mernShop?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true  })
// .then(()=>console.log('connected'))
// .catch(e=>console.log(e))

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