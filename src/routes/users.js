const express = require("express");
const { registerUser, loginUser, logoutUser, getUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(getUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
module.exports = router;
