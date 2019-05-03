var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("home",
      {
        style: "home.css",
        script: "home.js",
        title: "Home, Welcome!"
      });

  });

  app.get("/home", (req, res) => {
    res.render("home",
      {
        style: "home.css",
        script: "home.js",
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

  app.get("/create", (req, res) => {
    res.render("create",
      {
        style: "create.css",
        script: "create.js",
        title: "Create"
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
