import { Sequelize } from "sequelize"

const db = {
    name: "form_pa",
    host: "localhost",
    pass: "",
    user: "root"
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