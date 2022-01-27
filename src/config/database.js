require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("moviewatchlistdb", "root", process.env.DB_PASS, {
	host: "localhost",
	dialect: "mysql",
	port: 3307,
});

// sequelize.sync();

// async () => {
// 	try {
// 		await sequelize.authenticate();
// 		console.log("Database successfully connected.");
// 	} catch (error) {
// 		console.error("Unable to connect to the database", error);
// 	}
// };

module.exports = sequelize;
