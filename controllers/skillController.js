// pull in the models
const db = require("../models");

// define the methods for skillController.js

module.exports = {
  // method that returns all user skills
  findSkills: function(req, res) {
    db.Skills
      .find( {
        Skills: req.params.Skills
      } )
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  // method that stores skills when user hits submit
  storeSkill: function(req, res) {
    db.Skills
      .create(req.body)
      .then(function(dbSkills) {
        return db.Users.findOneAndUpdate( 
          { userID: req.params.id },
          { Skills: dbSkills._id },
          { new: true } 
          )
      })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  // method that grabs clicked on skill an it's data
  findOneSkill: function(req, res) {
    db.Skills
      .findOne( {Skills: req.params.Skill} )
      .populate("Skills")
      .then(function(dbSkills) {
        // If all Users are successfully found, send them back to the client
        res.json(dbSkills);
      })
      .catch(function(err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
}
}
