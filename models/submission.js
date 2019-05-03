module.exports = (sequelize, DataTypes) => {
  var Submission = sequelize.define("Submission", {
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [5, 50]
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.Integer,
        allowNull: false
      },
      email: {
        type: DataTypes.String,
        allowNull: false
      },
      exampleURL: {
        type: DataTypes.String
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          allowNull: false,
          len: [200, 2000]
        }
      }
    }
  });
  return Submission;
}
