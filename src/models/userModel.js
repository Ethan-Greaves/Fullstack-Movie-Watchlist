const bcrypt = require("bcryptjs");
const sequelize = require("sequelize");
const db = require("../database");

const userSchema = db.define(
	"user",
	{
		userId: {
			field: "user_id",
			autoIncrement: true,
			primaryKey: true,
			type: sequelize.INTEGER,
		},
		username: {
			type: sequelize.STRING,
			field: "user_name",
		},
		password: {
			type: sequelize.STRING,
			field: "password",
		},
	},
	{
		freezeTableName: true,
		instanceMethods: {
			generateHash(password) {
				return bcrypt.hash(password, bcrypt.genSaltSync(8));
			},
			validPassword(password) {
				return bcrypt.compare(password, this.password);
			},
		},
	}
);

module.exports = userSchema;
