const db = require("../database");
const userModel = require("../models/userModel");

const registerUser = (req, res) => {
	const { username, password } = req.body;
	const newUser = userModel.create({ username: "Ethan", password: "1234" });
	res.send("working");
};

module.exports = { registerUser };
