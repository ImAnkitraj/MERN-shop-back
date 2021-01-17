const product = require("./models/product");
var Product = require('./models/product')

var dataProd = [
    {
        type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p6.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p1.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p2.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p3.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p4.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p5.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
    {type:'shoes',
        title:"adidas ghost shoe",
        img:"img/product/p6.jpg",
        Aprice:220,
        Dprice:120,
        description:"Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking forsomething that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter."
    },
]

const seed = () =>{

    Product.deleteMany()
    dataProd.map(prod=>{
        var newProduct = new Product(prod)
        newProduct.save();
    })
    
}

module.exports = seed;