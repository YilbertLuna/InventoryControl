import {sequelize} from "./db.js"

export const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('connection established 🟢')       
    } catch (error) {
        console.log(`Error connecting 🔴 ${error}`)
    }
}