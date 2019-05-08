module.exports = (sequelize, DataTypes) => {
  var Submissions = sequelize.define("Submissions", {
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [5, 50]
      }
    },
    artTitle: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [5, 50]
      }
    },
    facebookURL: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    linkedInURL: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    photoURL: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false,
        len: [200, 2000]
      }
    }
  });
  return Submissions;
}
