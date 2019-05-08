var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/submissions/:category/:state", function (req, res) {

    db.Submission.findAll(
      {
        where: {
          category: `${req.params.category}`,
          location: `${req.params.state}`
        }
      }).then(function (dbSubmissions) {
        if (!dbSubmissions) {
          console.log(dbSubmissions);
        }
        else {
          res.json(dbSubmissions);
        }

      });
  });


  app.post("/api/submissions", function (req, res) {
    db.Submission.create({
      name: req.body.name,
      artTitle: req.body.artTitle,
      facebookURL: req.body.facebookURL,
      location: req.body.location,
      linkedInURL: req.body.linkedInURL,
      category: req.body.category,
      email: req.body.email,
      photoURL: req.body.photoURL,
      description: req.body.description
    }).then(function (dbSubmission) {
      res.json(dbSubmission);
    });
  });
};

