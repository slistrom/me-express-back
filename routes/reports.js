var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/texts.sqlite');
const db = require("../db/database.js");
const jwt = require('jsonwebtoken');

let config;

try {
    config = require('../config.js');
} catch (error) {
    console.error(error);
}

const jwtSecret = process.env.JWT_SECRET || config.secret;

router.post("/",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => reportedit(res, req.body));

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, jwtSecret, function(err, decoded) {
        if (err) {
            return res.status(401).json({
                data: {
                    message: "No valid token."
                }
            });
        }
        // Valid token send on the request
        next();
    });
}

function reportedit(res, body) {
    const week = body.week;
    const text = body.text;

    db.run("UPDATE reports SET text = '" + text + "' WHERE week = " + week,
        (err) => {
            if (err) {
                // console.log(err);
            }
            return res.status(201).json({
                data: {
                    message: "Report successfully updated."
                }
            });
        });
}

module.exports = router;
