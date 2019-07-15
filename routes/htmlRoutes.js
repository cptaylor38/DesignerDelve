var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("landing",
      {
        style: "landing.css",
        script: "landing.js",
        title: "Welcome!"
      });

  });

  app.get("/home", (req, res) => {
    res.render("home",
      {
        style: "home.css",
        title: "Home, Welcome!"
      });
  });

  app.get("/gallery", function (req, res) {
    res.render("gallery",
      {
        style: "gallery.css",
        script: "gallery.js",
        title: "Gallery"
      });

  });

  app.get("/gallery/category", (req, res) => {
    res.render("gallery",
      {
        style: "gallery.css",
        script: "gallery.js",
        title: "Gallery"
      }
    )
  })

  app.get("/submission", (req, res) => {
    res.render("submission",
      {
        style: "submission.css",
        script: "submission.js",
        title: "Submission"
      });
  });

  app.get("*", function (req, res) {
    res.render("home",
      {
        style: "home.css",
        script: "home.js",
        title: "Home, Welcome!"
      });
  });
};
