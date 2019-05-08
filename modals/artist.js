module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {

        name: DataTypes.STRING
    });

    return Artist;
}