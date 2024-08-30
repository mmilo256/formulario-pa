/* eslint-disable no-undef */
import { Sequelize } from "sequelize"
import 'dotenv/config'

const db = {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    pass: process.env.DB_PASS,
    user: process.env.DB_USER
}

const sequelize = new Sequelize(db.name, db.user, db.pass, {
    host: db.host,
    dialect: "mysql"
})

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default sequelize