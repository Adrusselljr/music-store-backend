const ProductModel = require('../Models/ProductModel')

const getProducts = async (req, res, next) => {
    try {
        const foundProducts = await ProductModel.find({})
        const formattedProducts = foundProducts.map(product => ({...product.toObject(), id: product._id}))
        res.send(formattedProducts)
    }
    catch (err) {
        console.log({'error': err})
    }
}

const addProduct= async (req, res, next) => {
    try {
        const productData = req.body.productData
        const newProduct = new ProductModel(productData)
        await newProduct.save()
        res.send(req.body)
        console.log('productData ', productData)
    }
    catch (err) {
        console.log({'error': err})
    }
}

module.exports = {
    getProducts,
    addProduct
}