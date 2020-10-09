const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 1337;

const index = require('./routes/index');
const reports = require('./routes/reports');
const week = require('./routes/week');
const register = require('./routes/register');
const login = require('./routes/login');

app.use(cors());

// This is middleware called for all routes.
// Middleware takes three parameters.
//app.use((req, res, next) => {
//    console.log(req.method);
//    console.log(req.path);
//    next();
//});

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Imported routes
app.use('/', index);
app.use('/reports/', reports);
app.use('/reports/week/', week);
app.use('/register/', register);
app.use('/login/', login);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

// Start up server
// if(!module.parent){
//     app.listen(process.env.PORT, () =>
//         console.log(`Example app listening on port ${process.env.PORT}!`),
//     );
// }

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;
