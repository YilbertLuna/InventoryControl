import { Router } from "express";

const CategoryRouter = Router()

CategoryRouter.post('/createdCategory', (req , res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json('i am creating a category')
})

CategoryRouter.delete('/deletedCategory', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json('i am deleting a category')
})

CategoryRouter.get('/categories', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json('i am getting all categories')
})

CategoryRouter.get('/category/:id', (req, res) => {
    res.header('Content-Type', 'application/json')

    res.status(200).json(`i am getting category with id: ${req.params.id}`)
})

export default CategoryRouter