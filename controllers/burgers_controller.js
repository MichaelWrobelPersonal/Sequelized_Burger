// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // Return all entries for Burgers
    db.Burger.findAll({}).then(function(dbBurger) {
     // Return the Burger(s) in JSON format
    res.json(dbBurger);
    });
  });

  // POST route for saving a new Burger.
  app.post("/api/burgers", function(req, res) {
      console.log(req.body);
      // Create the Burger
      db.dbBurger.create({
        text: req.body.text,
        complete: req.body.complete
      }).then(function(dbBurger) {
      // Return the new Burger in JSON format
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting Burgers
  app.delete("/api/burgers/:id", function(req, res) {
    // Specify which Burger to destroy and destroy it
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
    res.status(200); // indicate sucessfull deletion
    });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
      }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
       // Return the updated Burger in JSON format      
      res.json(dbBurger);
  });
};

//========================================================

//var express = require("express");

// Old for comparison

//var router = express.Router();
//var burger = require("../models/burgers.js");
//var index = require("./models/index")

// Create routes.
//router.get("/", function(req, res) {
//  burger.all(function(data) {
//    var hbsObject = {
//      burgers: data
//    };
//    console.log(hbsObject);
//    res.render("index", hbsObject);
//  });
//});

//router.post("/api/burgers", function(req, res) {
//  burger.create([
//    "burger_name", "devoured"
//  ], [
//    req.body.burger_name, req.body.devoured
//  ], function(result) {
//    // Return ID of the Burger
//    res.json({ id: result.insertId });
//  });
//});

//router.put("/api/burgers/:id", function(req, res) {
//  var condition = "id = " + req.params.id;

//  console.log("condition", condition);

//  burger.update({
//    devoured: req.body.devoured
//  }, condition, function(result) {
//    if (result.changedRows == 0) {
//      // If no rows were changed, then the ID must not exist, so 404
//      console.log(result);
//      return res.status(404).end();
///    } else {
//      res.status(200).end();
//    }
//  });
//});

//router.delete("/api/burgers/:id", function(req, res) {
//  var condition = "id = " + req.params.id;
//  console.log('delete');
//  burger.delete(condition, function(result) {
//    if (result.affectedRows == 0) {
//      // If no rows were changed, then the ID must not exist, so 404
//      console.log(result);
//      return res.status(404).end();
//    } else {
//      res.status(200).end();
//    }
//  });
//});

//router.get("/api/burgers/:id", function(req, res) {
//  console.log('get api_burgers_id');
//  var condition = "id = " + req.params.id;
  
//  console.log("condition", condition);
  
//  burger.read(
//    condition,
//    function(result) {
//      if (result.changedRows === 0) {
//        // If no rows were changed, then the ID must not exist, so 404
//        return res.status(404).end();
//      }
//      res.json({ id: result.insertId,
//                 burger_name: result.burger_name,
//                 devoured: result.devoured });
////      res.status(200).end();
//    });
//});


//// Export routes for server.js to use.
//module.exports = router;
