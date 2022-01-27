const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs/dist/bcrypt");
const userModel = require("../models/userModel");

const init = (passport) => {
	const authenticateUser = async (username, password, done) => {
		const user = await userModel.findOne({ where: { username } });
		if (user === null) return done(null, false, { message: "No user with that username" });
		try {
			return (await bcrypt.compare(password, user.password))
				? done(null, user)
				: done(null, false, { message: "password incorrect" });
		} catch (error) {
			return done(error);
		}
	};

	passport.use(
		new localStrategy(
			{
				usernameField: "username",
				passwordField: "password",
			},
			authenticateUser
		)
	);

	// passport.serializeUser((user, done) => {
	// 	done(null, user.id);
	// });

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});
};

module.exports = init;
