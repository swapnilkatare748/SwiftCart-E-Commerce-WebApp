const express = require("express");
const { login,signup } = require("../Controllers/userAuthorization/authController");

const router = express.Router();

// http://localhost:8080/auth/ 
                       

router.post("/login", login);

router.post('/signup',signup);


module.exports = router;
