// Docusphere-Ai/backend/routes/user.js
const express = require('express');
const router = express.Router();
const {login, logout, signUp }= require('../controller/auth')
// Example route
router.post('/login', login);
router.post("/logout", logout);
router.post("/signup", signUp);


module.exports = router;