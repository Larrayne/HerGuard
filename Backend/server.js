const express = require("node");
const mysql = require('mysql');
const cors = require('cors');

const app = express;
app.request(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})
