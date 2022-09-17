const express = require("express");

const app = express();

app.port = 5000;

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" />`);
});

app.listen(app.port, () => {
  console.log(`Server is listening on ${app.port}`);
});
