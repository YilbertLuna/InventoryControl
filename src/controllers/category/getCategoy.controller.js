import { getAllCategory } from "../../dataBase/DbQueries/queries.db.js"

export const  getCategory = async (req, res) => {
    res.header('Content-Type', 'application/json')

    try {
        const tables = await getAllCategory()
        res.status(200).json(tables.map(t => t.table_name));
    } catch (error) {
        console.log(`🔴 ${error}`)
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }

}