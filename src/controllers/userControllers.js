const bcrypt = require("bcryptjs/dist/bcrypt");
const db = require("../config/database");
const userModel = require("../models/userModel");
const passport = require("passport");

const registerUser = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await userModel.findOne({ where: { username } });
		if (user) return res.status(400).send("user already exists");
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		await userModel.create({
			username,
			password: hashedPassword,
		});

		res.status(201).send("working");
	} catch (error) {
		res.status(500).send();
	}
};

const loginUser = async (req, res, next) => {
	const failedMsg = "Incorrect username or password";
	let success = false;
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.json({ failedMsg, success });
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				success = true;
				req.session.user = req.user;
				res.json({ success });
			});
		}
	})(req, res, next);
};

const logoutUser = (req, res) => {
	req.logout();
	req.session.destroy();
	res.send("user logged out!");
};

const getUser = (req, res) => {
	req.user ? res.status(200).send(req.user) : res.status(401);
};

module.exports = { registerUser, loginUser, logoutUser, getUser };
