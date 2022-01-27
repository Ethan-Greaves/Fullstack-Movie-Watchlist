require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("moviewatchlistdb", "root", process.env.DB_PASS, {
	host: "localhost",
	dialect: "mysql",
	port: 3307,
});

module.exports = sequelize;
