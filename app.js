//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay === 6 || 0) {
    res.write("<h1>Yeyyyy it's weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});