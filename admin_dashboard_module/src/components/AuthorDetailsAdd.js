var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BookStore");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
module.exports = function (router) {
  router.get('/AuthorDetailsAdd', AuthorDetailsAdd);
}
app.post("/insert", function (req, res) {
  var name = req.body.name;
  var address = req.body.address;
  var contactNo = req.body.contactNo;
  var email = req.body.email;

  var data = {
    name: name,
    address: address,
    contactNo: contactNo,
    email: email,
  };
  db.collection("users").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.sendFile(__dirname + "/success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.sendFile(__dirname + "/AuthInsert.html");
  })
  .listen(3001);

console.log("server listening at port 3001");