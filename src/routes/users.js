const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.get("/", (req, res) => {
	res.send("/api/users route");
});
module.exports = router;
