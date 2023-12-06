const express = require('express');
const router = express.Router();
const ApiController = require("../controllers/ApiController.js");

router.get("/", ApiController.test);

module.exports = router;