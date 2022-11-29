const express = require('express');
const router = express.Router();
const db = require('../models/index')

router.get('/products',(req,res) => {
    const Products = db.Products
    Products.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})

router.get('/products/:id', (req, res) => {  //funca
    let idN = req.params.id
    const Products = db.Products
    Products.findAll({
        where:{
            id: idN
        }
    })
    .then(data => {
        if (data.length > 0){
            res.send(data)
        }
        else{
            res.status(404).send({message: 'Producto no disponible'})
        }
      })
    .catch(err => {res.status(400).send({message: err.message})})
})

router.get('/products/:category', (req, res) => {  //no funca
    let catego = req.params.category
    const Products = db.Products
    Products.findAll({
        where:{
            category: catego
        }
    })
    .then(data => {
        if (data.length > 0){
            res.send(data)
        }
        else{
            res.status(404).send({message: 'Producto no disponible'})
        }
      })
    .catch(err => {res.status(400).send({message: err.message})})
})


router.post('/products',(req,res)=>{  //funca
    const Products = db.Products
    let produ = {
        product_name: req.body.product_name,
        category: req.body.category,
        image: req.body.imagen,
        price:req.body.price
    }
    Products.create(produ)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error, por favor intente nuevamente'})
    })
})



module.exports = router ;
