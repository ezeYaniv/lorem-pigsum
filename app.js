//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const pigify = require("./public/scripts/pigify.js");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// global variable declarations
let pigText = [];
let paragraphs = 3;
let length = "medium";

app.get("/", function (req, res) {
  res.render("index", { pigText: pigText, paragraphs: paragraphs, length: length });
});

app.post("/", function (req, res) {
  // console.log(req.body);
  paragraphs = req.body.paragraphs;
  length = req.body.length;

  const url = "https://loripsum.net/api/" + paragraphs + "/" + length + "/plaintext";

  https.get(url, (response) => {
    // console.log(response);
    response.setEncoding("utf8");
    let data='';
    response.on("data", chunk => {
      data += chunk;
    });
    response.on("end", () => {
      pigText = pigify(data);
      res.redirect("/");
    });
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
