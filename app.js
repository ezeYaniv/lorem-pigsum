//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const pigify = require("./pigify.js");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", function (req, res) {
  https.get("https://loripsum.net/api/4/short/plaintext", (response) => {
    response.setEncoding("utf8");
    response.on("data", (data) => {
      // var text = JSON.parse(data);
      pigify(data);
    });
  });

  res.render("home");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
