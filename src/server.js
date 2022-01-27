const express = require("express");
const app = express();
const port = 3001;
const users = require("./routes/users");
const db = require("./config/database");
const initPassport = require("./config/passport");
const passport = require("passport");
const bodyParser = require("body-parser");
const crossDomain = require("./config/crossDomain");
app.use(crossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// initPassport(passport);
db.authenticate()
	.then(() => console.log("db connected!"))
	.catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.get("/", (req, res) => {
	res.send("Server working!");
});

app.use("/api/users", users);

app.listen(3001, console.log(`server started on port ${port}`));
