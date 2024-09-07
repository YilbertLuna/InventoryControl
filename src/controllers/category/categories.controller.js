import {sequelize} from "../../dataBase/db.js"

export const createdCategory = async (req, res) => {
    res.header('Content-Type', 'application/json')

    const {nameCategory} = req.body

    if(nameCategory === '') {
        res.status(404).json({message: 'Enter a name category'})
        return
    }

    const category = nameCategory.replace(/\s+/g, '').toLowerCase()

    try {
        await sequelize.query({
            query:
            `CREATE TABLE ${category} (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                name TEXT NOT NULL,
                description TEXT NOT NULL
            );`
        })
        
        res.status(200).json(`${nameCategory} is created successfully`)
    } catch (error) {
        res.status(404).json({message: error.message})
    }


}