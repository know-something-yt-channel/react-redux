const dbConfig = require("../db_config");

const Sequelize = require("sequelize");
const dbConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  });

const db = {};
db.Sequelize = Sequelize;
db.dbConnection = dbConnection;

db.users = require("./user.model.js")(dbConnection, Sequelize);

module.exports = db;