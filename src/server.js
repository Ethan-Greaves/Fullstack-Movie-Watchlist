const express = require("express");
const app = express();
const port = 3001;
const users = require("./routes/users");
const db = require("./database");

db.authenticate()
	.then(() => console.log("db connected!"))
	.catch((err) => console.log(`Error: ${err}`));

app.use(express.json());
app.get("/", (req, res) => {
	res.send("Server working!");
});

app.use("/api/users", users);

app.listen(3001, console.log(`server started on port ${port}`));
