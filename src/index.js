const express = require('express');

// routes group
const routes = require("./routes");

const app = express();

const port = 4173;

app.use('/users', routes.users);

app.get('/', (req, res) => {
    res.json({message: 'Hello Get Method'});
});

app.post("/", (req, res) => {
    res.json({message: 'Hello Post Method'});
});

app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`);
})