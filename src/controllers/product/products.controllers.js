import { sequelize } from "../../dataBase/db.js";

export const saveProduct = async (req, res) => {
    res.header('Content-Type', 'application/json')

    const {productName, nameCategory, description} = req.body

    const category = nameCategory.replace(/\s+/g, '').toLowerCase()

    try {
        await sequelize.query({
            query:
            `insert into ${category} (name, description) values('${productName}', '${description}')`
        })
        res.status(200).json(`${productName} is saved successfully`)
    } catch (error) {
        res.status(404).json({ error: error })
    }
    
}