// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
//    console.log("FindAll Burgers")
//    console.log(req.body);
    // Return all entries for Burgers
    db.Burgers.findAll({raw: true}).then(function(result) {
      var hbsObject = {
        burgers: result
      };
     // Return the Burger(s) in handlebar block rendered format
//    console.log('rendered Burger response:')
//    console.log(hbsObject);
    res.render("index", hbsObject);
    }).catch(function(err) {
      res.status(500).end();
      console.log(err);
    });;
  });

  // POST route for saving a new Burger.
  app.post("/api/burgers", function(req, res) {
//      console.log("Burger Create:");
//      console.log(req.body);
      // Create the Burger
      db.Burgers.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }).then(function(result) {
      // Return the ID of the new Burger in JSON format
      res.json({ id: result.insertId });
    }).catch(function(err) {
      res.status(500).end();
      console.log(err);
    });
  });

  // DELETE route for deleting Burgers
  app.delete("/api/burgers/:id", function(req, res) {
//    console.log("Burger Destroy:")
//    console.log(req.body);
    // Specify which Burger to destroy and destroy it
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
    res.status(200).end(); // indicate sucessfull deletion
    }).catch(function(err) {
      res.status(500).end();
      console.log(err);
    });
  });

  // PUT route for updating burgers. The updated todo will be available in req.body
  app.put("/api/burgers/:id", function(req, res) {
//    console.log("Burger Update:")
//    console.log(req.body);
    db.Burgers.update({
      devoured: req.body.devoured
      }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
       // Return the updated Burger in JSON format      
      res.json({ id: result.insertId });
    }).catch(function(err) {
      res.status(500).end();
      console.log(err);
    });
  });
}