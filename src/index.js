const express = require('express');
const mysqli = require('mysql2');

const dbPool = mysqli.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express_mysql',
    password: 'Local##123',
    waitForConnections: true,
});

// routes group
const routes = require("./routes");

// middleware group
const middleware = require("./middleware");

const app = express();

const port = 4173;

// s:middleware
app.use(middleware.logs.logRequest);
app.use(express.json());
// e:middleware

app.use('/users', routes.users);

app.use('/', (req, res) => {
    dbPool.execute(`SELECT * FROM users`, (err, rows) => {
        if(err){
            res.json({
                message: 'Connection failed',
            });
        }

        res.json({
            message: 'Connection success',
            data: rows
        });
    })
})

app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`);
})