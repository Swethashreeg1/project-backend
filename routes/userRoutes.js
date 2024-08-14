const express = require("express");
const { createUser, userLogin } = require("../controllers/userController");

const router = express.Router();

// Route to register a new user
router.post("/register", createUser);

// Route for user login
router.post("/login", userLogin);

module.exports = router;
