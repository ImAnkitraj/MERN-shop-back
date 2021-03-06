var express = require("express");
var router = express.Router();
var productControllers = require('../controllers/productControllers')
var Product = require('../models/product')

router.post('/products',async function(req,res){
    console.log(req.body)
    var result = await productControllers.getProducts(req.body.type, req.body.offset, req.body.limit);
    res.send(result)
})

router.get('/products/count', async function(req, res){
    console.log(req.query);
    var result = await productControllers.getProductsCount(req.query.type);
    console.log('count',result)
    res.status(200).send((result).toString());
})

router.post('/cart/delete', async function(req,res){
    var result = await productControllers.deleteFromCart(req.body.id, req.body.userId)
    res.send(result);
})

router.post('/cart/add', async function(req,res){
    console.log(req.body)
    var result = await productControllers.addToCart(req.body.id, req.body.userId)
    res.send(result)
})

router.post('/order/delete', async function(req,res){
    var result = await productControllers.deleteFromOrder(req.body.id, req.body.userId)
    res.send(result);
})
router.post('/order/add', async function(req,res){
    var result = await productControllers.addToOrder(req.body.ids, req.body.userId)
    res.send(result)
})

router.post('/search', async function(req, res){
    var result = await productControllers.search(req.body.searchItem)
    res.send(result);
})


module.exports = router