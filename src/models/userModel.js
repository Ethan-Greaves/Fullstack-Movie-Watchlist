const bcrypt = require("bcryptjs");
const sequelize = require("sequelize");
const db = require("../config/database");

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
			allowNull: false,
		},
		password: {
			type: sequelize.STRING,
			field: "password",
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

const generateHash = (password) => {};

userSchema.beforeCreate(generateHash);

module.exports = userSchema;
