const express = require('express');
const router = express.Router();
const db = require('../models/index')

router.get('/products',(req,res) => {
    const Products = db.Products
    Products.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})

module.exports = router ;
