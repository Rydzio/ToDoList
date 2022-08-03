//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  // var day = getSpanishDay(today.getDay());
  var day = getDay(today);

  res.render("list", { //gets sent to list.ejs
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", (req, res) => {
  var item = req.body.newItem; //to use req.body we need to set up bodyParser - app.use(bodyParser.urlencoded({ extended: true }));
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});


// Day Functions 

function getDay(today) {
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options)
  return (day);
}

function getSpanishDay(currentDay) {
  const weekDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  for (var i = 0; i < weekDays.length; i++) {
    if (currentDay === i) {
      var day = weekDays[i];
    }
  }
  return day;
}