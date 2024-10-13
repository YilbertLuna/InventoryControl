import { sequelize} from "../db.js"

export const createdTable = async (categoryName) => {
    await sequelize.query({
        query:
        `create table ${categoryName} (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid() not null,
            name text not null,
            description text not null,
            price numeric(10, 2) not null
        );`
    })
}

export const newProduct = async (productName, category, description, price) => {
    await sequelize.query({query: `INSERT INTO ${category} (name, description, price) VALUES('${productName}', '${description}', ${price})`})
}