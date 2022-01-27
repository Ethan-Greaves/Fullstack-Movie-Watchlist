if (process.env.NODE_ENV != "production") require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const users = require("./routes/users");
const db = require("./config/database");
const initPassport = require("./config/passport");
const passport = require("passport");
const bodyParser = require("body-parser");
const crossDomain = require("./config/crossDomain");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(crossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

db.authenticate()
	.then(() => console.log("db connected!"))
	.catch((err) => console.log(`Error: ${err}`));

app.get("/", (req, res) => {
	res.send("Server working!");
});

app.use("/api/users", users);

app.listen(3001, console.log(`server started on port ${port}`));
