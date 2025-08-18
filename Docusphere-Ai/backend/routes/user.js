// Docusphere-Ai/backend/routes/user.js
const express = require('express');
const router = express.Router();
const {login }= require('../controller/auth')
// Example route
router.post('/login', login);

module.exports = router;