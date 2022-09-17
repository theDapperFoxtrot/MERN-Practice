const express = require("express");
const app = express();
const morgan = require("morgan");
// req => middleware => res

const logger = require("./logger");
const authorize = require("./authorize");

app.use(morgan("tiny"));
// app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("*", (req, res) => {
  res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" />`);
});

app.port = 5000;

app.listen(app.port, () => {
  console.log(`Server is listening on port ${app.port}...`);
});
