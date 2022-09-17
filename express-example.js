const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// adding to static assets
// Server Side Rendering
// });

app.all("*", (req, res) => {
  res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" />`);
});

app.port = 5000;

app.listen(app.port, () => {
  console.log(`Server is listening on port ${app.port}...`);
});
