const express = require("express");
const app = express();
const PORT_NUMBER = 7000;
const path = require("path");
const rootDir = require("./utilities/root_directory_handler");
const router = require("./routes/routeshandler");
const cors = require("cors");

app.listen(PORT_NUMBER, () => {
  console.log(
    `The server has been started at  http://localhost:${PORT_NUMBER}`
  );
});

//***************************************** SETTING UP THE VIEW EJS ENGINE */
app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors());

app.use(express.static(path.join(rootDir, "public"))); // seeting up the public folder

app.use(express.urlencoded()); //getting the data parsed sent in the request
app.use((req, res, next) => {
  //reading and consoling the data
  console.log(req.method, req.url);
  console.log(req.body);
  next();
});

app.use(router);

//handling the page not found
app.use((req, res, next) => {
  res.render("notfound");
});
