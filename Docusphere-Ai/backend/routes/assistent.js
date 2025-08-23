const express = require("express");
const { askToAssistant } = require("../controller/gemini");
const isAuth = require("../middlewares/auth");
const router = express.Router();

router.post('/ask-to-assistant', isAuth, askToAssistant);

module.exports = router;