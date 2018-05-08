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
  });
}