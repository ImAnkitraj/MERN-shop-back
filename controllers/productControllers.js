var Product = require('../models/product');
var User = require('../models/user');
var FuzzySearch = require('fuzzy-search')
const getProducts = async (type)  =>{
    var products;
    if(type){
        products = await Product.find({type:type})
    }
    else {
        products = await Product.find({})
    }
    return products
}

const deleteFromCart = async (id,userId) => {
    user = await User.findById(userId)
    // console.log(user)
    console.log('prv cart',user.cart);
    var newCart = user?.cart.filter(c=>{
        if(c._id == id)
            return false;
        return true;
    })
    user.cart = newCart;
    user.save();
    return {...user._doc, password:null}
}

const addToCart = async (id,userId) => {
    console.log(userId)
    console.log(id)
    var user = await User.findById(userId);
    console.log(user)
    var product = await Product.findById(id);
    // console.log(product)
    var newCart = [...user.cart, product._doc];
    user.cart = newCart;
    // console.log(newCart)
    user.save();
    return {...user._doc, password:null};
}

const deleteFromOrder = async (id,userId) => {
    user = await User.findById(userId)
    // console.log(user)
    var newOrder = user?.order.filter(_=>{
        if(_._id == id){
            return false;
        }
        return true;
    })
    
    user.order = newOrder;
    user.save();
    return {...user._doc, password:null}
}

const addToOrder = async (id, userId) =>{
    var user = await User.findById(userId);
    // console.log(user)
    var product = await Product.findById(id);
    // console.log(product)
    var newOrder = [...user.order, product._doc];
    user.order = newOrder;
    // console.log(newCart)
    user.save();
    return {...user._doc, password:null};
}


const search = async (searchItem) => {
    console.log('search hit')
    console.log(searchItem)
    var products = await Product.find({});
    const searcher = new FuzzySearch(products, ['title', 'type'], {
        caseSensitive: false,
    });
    const result = searcher.search(searchItem);
    return result;
}
module.exports = {
    getProducts,
    deleteFromCart,
    addToCart,
    addToOrder,
    deleteFromOrder,
    search,
}