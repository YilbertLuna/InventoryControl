import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: process.env.POSTGRES_DIALECT,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
})