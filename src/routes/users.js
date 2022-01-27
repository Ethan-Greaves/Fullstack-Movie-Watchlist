const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(getUser);
router.route("/login").post(loginUser);
module.exports = router;
