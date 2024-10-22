import { Router } from "express";

import { createdCategory } from "../controllers/category/categories.controller.js";
import { getCategory } from "../controllers/category/getCategoy.controller.js";

const CategoryRouter = Router()

CategoryRouter.post('/createdCategory', createdCategory);

// CategoryRouter.delete('/deletedCategory', (req, res) => {
//     res.header('Content-Type', 'application/json')

//     res.status(200).json('i am deleting a category')
// })

CategoryRouter.get('/getcategories', getCategory)

// CategoryRouter.get('/category/:id', (req, res) => {
//     res.header('Content-Type', 'application/json')

//     res.status(200).json(`i am getting category with id: ${req.params.id}`)
// })

export default CategoryRouter