import express from "express";
import morgan from "morgan";

import ProductsRouter from "../routes/products.routes.js";
import CategoryRouter from "../routes/category.routes.js";

const app = express();

// use morgan
app.use(morgan('dev'))
app.use(express.json())

//use routes
app.use('/api', ProductsRouter)
app.use('/api/category', CategoryRouter)

export default app