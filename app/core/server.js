require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("../config/routes.js");

const server = express();
server.use(fileUpload());
server.use("/", router);

const baseUrl = process.env.BASE_URL;
const port = process.env.PORT;

module.exports = {
    server,
    baseUrl,
    port
}