var db = require("../modals");

module.exports = function(app) {

    // Get all our artist
    app.get("/api/artist", function(req, res) {
        
        db.Artist.findAll().then(function (dbArtist) {
            res.json(dbArtist);
        });
    });

    //Post (Create) artist
    app.post("/api/posts", function (req, res) {
        
        db.Artist.create({
            name: req.body
        })
    })
}