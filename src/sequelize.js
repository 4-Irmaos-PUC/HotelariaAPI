const sequelize = require("sequelize");
const db = require("./db");

const sequelizeInstance = new sequelize(
    db.database, 
    db.username,
    db.password, {
        host: db.host,
        dialect: db.dialect,
    }
);

module.exports = sequelizeInstance;
