import { newProduct} from "../../dataBase/DbQueries/queries.db.js"

export const saveProduct = async (req, res) => {
    res.header('Content-Type', 'application/json')

    const {productName, nameCategory, description, price} = req.body

    const category = nameCategory.replace(/\s+/g, '').toLowerCase()

    try {
        await newProduct(productName, category, description, price)
        res.status(200).json(`${productName} is saved successfully`)
    } catch (error) {
        res.status(404).json({ error: error})
    }
    
}