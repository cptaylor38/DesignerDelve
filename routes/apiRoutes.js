var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Submission.findAll({}).then(function (dbSubmissions) {
      res.json(dbSubmissions);
    });
  });

  // Create a new Submission
  app.post("/api/Submissions", function (req, res) {
    db.Submission.create(req.body).then(function (dbSubmission) {
      res.json(dbSubmission);
    });
  });

  // Delete an Submission by id
  app.delete("/api/Submissions/:id", function (req, res) {
    db.Submission.destroy({ where: { id: req.params.id } }).then(function (dbSubmission) {
      res.json(dbSubmission);
    });
  });
};


// Option 1
// var request = require('superagent');

// var clientID = '1cb4a3bde2ff73b4155a',
//     clientSecret = '0a117ca660b29ea69bc2a481f147f6e9',
//     apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
//     xappToken;

// request
//   .post(apiUrl)
//   .send({ client_id: clientID, client_secret: clientSecret })
//   .end(function(res) {
//     xappToken = res.body.token; 
//   });


// Option 2
// var traverson = require('traverson'),
//     JsonHalAdapter = require('traverson-hal'),
//     xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1NzMwMzA3MCwiaWF0IjoxNTU2Njk4MjcwLCJhdWQiOiI1Y2M5NTQ5ZTI5OTljYjU1NDg5MGJlZGIiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNjOTU0OWVhMDEwMjg2MDFmMTJmZWU2In0.XAlF8-brq2b929VV_qj3RjJ8cdfrnvlIXzQ5oIO4zrY';

// traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
// api = traverson.from('https://api.artsy.net/api').jsonHal();

// api.newRequest()
//   .follow('artist')
//   .withRequestOptions({
//     headers: {
//       'X-Xapp-Token': xappToken,
//       'Accept': 'application/vnd.artsy-v2+json'
//     }
//   })
//   .withTemplateParameters({ id: 'andy-warhol' })
//   .getResource(function(error, andyWarhol) {
//     console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
//   });