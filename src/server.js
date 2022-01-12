const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Server working!");
});

app.listen(3001, console.log(`server started on port ${port}`));
