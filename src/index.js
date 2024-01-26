const express = require('express');

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

app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`);
})