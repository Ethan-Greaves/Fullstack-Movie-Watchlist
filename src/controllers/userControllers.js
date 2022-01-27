const bcrypt = require("bcryptjs/dist/bcrypt");
const db = require("../database");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
	const { username, password } = req.body;

	try {
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		userModel.create({
			username: username,
			password: hashedPassword,
		});

		res.status(201).send("working");
	} catch (error) {
		res.status(500).send();
	}
};

const loginUser = async (req, res) => {

}

module.exports = { registerUser };