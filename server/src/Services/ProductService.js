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

module.exports = {
    getProducts
}