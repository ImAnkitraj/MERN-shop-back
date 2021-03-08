const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var User = require("../models/user");

const login = async (email, password) => {
    if(email !== undefined && password !== undefined){
        console.log('valid')
        var foundUser = await User.findOne({email:email});
        // console.log('found',foundUser)
        if(!foundUser){
            return {
                status: false,
                message : 'User not found'
            }
        }
        const isEqual = await bcrypt.compare(password, foundUser.password);
        // console.log(isEqual)
        if(!isEqual){
            return {
                status: false,
                message: 'Incorrect Credentials',
            }
        }
        const token = jwt.sign({
                userId: foundUser.id,
                email: foundUser.email,
            },
            'somesupersecretkey',
            {
                expiresIn: '1h',
            }
        );
        // console.log(token)
        return {
            userId: foundUser.id,
            user: {...foundUser._doc, password:null},
            token: token,
            tokenExpiration:  1,
        }
    }
    else{
        console.log('invalid')
        return ( {
           status: false,
           message:"Invalid credentials"
       })
    }
};


const register = async (email, password) => {
    if(email !== undefined && password !== undefined){
        console.log('valid')
        var foundUser = await User.findOne({email:email});
        console.log('found',foundUser)
        if(foundUser){
            return ({
                status: false,
                message:"User already exists",
            })
        }
        var hashedPass = await bcrypt.hash(password, 12)
        var newUser = new User({
                email: email,
                password: hashedPass,
        })
        console.log('new',newUser)
        newUser.save();
        return newUser._doc;
    }
    else{
        console.log('invalid')
        return ( {
           status: false,
           message:"Invalid credentials"
       })
    }
};

module.exports = {
    login,
    register,
}