var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg:  "No week given"
        }
    };

    res.json(data);
});

router.get("/:msg", (req, res) => {
    db.each("SELECT week, text FROM reports WHERE week = " + req.params.msg, function(err, row) {
        // console.log(row.week + ": " + row.text);
        const data = {
            data: {
                week: row.week,
                text: row.text
            }
        };

        res.json(data);
    });


});

module.exports = router;
