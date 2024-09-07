import { Router } from "express";

import { createdCategory } from "../controllers/category/categories.controller.js";

const CategoryRouter = Router()

CategoryRouter.post('/createdCategory', createdCategory);

// CategoryRouter.delete('/deletedCategory', (req, res) => {
//     res.header('Content-Type', 'application/json')

//     res.status(200).json('i am deleting a category')
// })

// CategoryRouter.get('/categories', (req, res) => {
//     res.header('Content-Type', 'application/json')

//     res.status(200).json('i am getting all categories')
// })

// CategoryRouter.get('/category/:id', (req, res) => {
//     res.header('Content-Type', 'application/json')

//     res.status(200).json(`i am getting category with id: ${req.params.id}`)
// })

export default CategoryRouter