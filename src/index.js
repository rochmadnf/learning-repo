require("dotenv").config();
const express = require("express");

// routes group
const routes = require("./routes");

// middleware group
const middleware = require("./middleware");

const app = express();

// s:middleware
app.use(middleware.logs.logRequest);
app.use(express.json());
// e:middleware

app.use("/users", routes.users);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening at http://127.0.0.1:${process.env.APP_PORT}`);
});
