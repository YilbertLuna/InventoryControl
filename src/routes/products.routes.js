import { Router } from "express";

const ProductsRouter = Router()

ProductsRouter.post('/saveProduct', (req, res) => {
    res.header('Content-Type', 'application/json')
    
    res.status(200).json('i am creating a product')
})

ProductsRouter.get('/products', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json('i am products')
})

ProductsRouter.get('/product/:id', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json(`i am getting product with id: ${req.params.id}`)
})

ProductsRouter.put('/updateProduct/:id', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json(`i am updating product with id: ${req.params.id}`)
})

ProductsRouter.delete('/deletedProduct/:id', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json(`i am deleting product with id: ${req.params.id}`)
})

export default ProductsRouter