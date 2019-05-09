module.exports = (sequelize, DataTypes) => {
  var Submission = sequelize.define("Submission", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    artTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    facebookURL: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    location: {
      type: DataTypes.STRING
    },
    linkedInURL: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 2000]
      }
    }
  }, { timestamps: false });
  return Submission;
}
