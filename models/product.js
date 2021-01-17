var mongoose = require("mongoose");
var productschema = new mongoose.Schema({
   type: String, 
   Aprice: Number,
   Dprice: Number,
   description: String,
   title: String,
   img: String
});

module.exports= mongoose.model("product", productschema);