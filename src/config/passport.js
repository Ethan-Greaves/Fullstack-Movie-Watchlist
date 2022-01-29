const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs/dist/bcrypt");
const userModel = require("../models/userModel");

const init = (passport) => {
	const message = "Incorrect username or password";
	const authenticateUser = async (username, password, done) => {
		const user = await userModel.findOne({ where: { username } });
		if (user === null) return done(null, false, { message });
		try {
			return (await bcrypt.compare(password, user.password))
				? done(null, user)
				: done(null, false, { message });
		} catch (error) {
			return done(error);
		}
	};

	passport.use(new localStrategy(authenticateUser));
	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((user, done) => done(null, user));
};

module.exports = init;
