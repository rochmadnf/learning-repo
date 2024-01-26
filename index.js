const express = require('express');

const app = express();

const port = 4173;

app.listen(port, () => {
    console.log(`App listening at http://127.0.0.1:${port}`);
})