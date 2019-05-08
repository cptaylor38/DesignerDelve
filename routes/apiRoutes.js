var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/submissions/:category/:state", function (req, res) {

    db.Submissions.findAll(
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


  // app.post("/api/Submissions", function (req, res) {
  //   db.Submissions.create(req.body

  //     ).then(function (dbSubmission) {
  //     res.json(dbSubmission);
  //   });
  // });
};

