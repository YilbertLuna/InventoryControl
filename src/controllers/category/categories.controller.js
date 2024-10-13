import { createdTable } from "../../dataBase/DbQueries/queries.db.js"

export const createdCategory = async (req, res) => {
    res.header('Content-Type', 'application/json')

    const {nameCategory} = req.body

    if(nameCategory === '') {
        res.status(404).json({message: 'Enter a name category'})
        return
    }

    const category = nameCategory.replace(/\s+/g, '').toLowerCase()

   try {
        await createdTable(category)
        res.status(200).json(`Category ${nameCategory} is created successfully`)
   } catch (error) {
        res.status(404).json({message: error.message})
   }
   
}