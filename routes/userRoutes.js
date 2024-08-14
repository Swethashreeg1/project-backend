// const express = require("express");
// const { createUser, userLogin } = require("../controllers/userController");

// const router = express.Router();

// // Route to register a new user
// router.post("/register", createUser);

// // Route for user login
// router.post("/login", userLogin);

// module.exports = router;
const userController=require("../controllers/userController")
const express=require("express")
const router= express.Router();

router.post("/",userController.createUser);
router.post("/login",userController.login);

module.exports=router;