const localStrategy = require("passport-local").Strategy;

const authenticateUser = (username, password, done) => {
    const user = getUser(username)
}

const init = (passport) => {
	passport.use(
		new localStrategy({
			usernameField: "username",
			passwordField: "password",
		}),
		() => authenticateUser(username, password, done)
    );
    
    passport.serializeUser((user, done) => {

    })

    passport.deserializeUser((id, done) => {
        
    })
};
