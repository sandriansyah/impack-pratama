const express = require('express')

const router = express.Router()

const {addProduct,getProducts,getProduct,editProduct,deleteProduct} = require('../controllers/product')

router.post('/add-product',addProduct)
router.get('/get-products',getProducts)
router.get('/get-product/:id',getProduct)
router.patch('/edit-product/:id',editProduct)
router.delete('/delete-product/:id',deleteProduct)

module.exports = router