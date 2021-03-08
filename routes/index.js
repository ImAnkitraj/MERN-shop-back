var express = require("express");
var router = express.Router();
const bcrypt = require('bcryptjs');
var User = require("../models/user");
var authControllers = require('../controllers/authControllers');

//========================================
//Auth Routes
//========================================

//sign up logic
router.post("/register", async function (req,res) {
    // console.log(req)
    const email = req.body.email;
    const password = req.body.password;
    var result = await authControllers.register(email,password);
    res.send(result);
});

//login logic
router.post("/login", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    var result = await authControllers.login(email, password);
    res.send(result);
});

module.exports = router;