const express = require('express')
const productRouter = express.Router()
const ProductService = require('../Services/ProductService')

productRouter.get('/get-products', async (req, res, next) => {
    return ProductService.getProducts(req, res, next)
})

productRouter.post('/add-product', async (req, res, next) => {
    return ProductService.addProduct(req, res, next)
})

module.exports = productRouter