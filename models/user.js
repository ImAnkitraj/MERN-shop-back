var mongoose = require("mongoose");
var userschema = new mongoose.Schema({
   password : String,
   email : String,
   cart : [],
   order : [],
});

module.exports= mongoose.model("user", userschema);