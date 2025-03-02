var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content from "public"
app.use(express.static("public"));

// parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
routes(app);
app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
