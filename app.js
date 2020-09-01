const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 1337;

const index = require('./routes/index');
const hello = require('./routes/hello');


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

// Imported routes
app.use('/', index);
app.use('/hello', hello);


// Add a route
app.get("/hello/:msg", (req, res) => {
    const data = {
        data: {
            msg: req.params.msg
        }
    };

    res.json(data);
});

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
app.listen(port, () => console.log(`Example API listening on port ${port}!`));
