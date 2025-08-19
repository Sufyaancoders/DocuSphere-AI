// Docusphere-Ai/backend/routes/user.js
const express = require('express');
const router = express.Router();
const {login, logout, signUp }= require('../controller/auth')
const {sendOTP} = require("../controller/send-verification")
// Example route
router.post('/login', login);
router.post("/logout", logout);
router.post("/signup", signUp);
router.post('/send-otp', sendOTP);

module.exports = router;