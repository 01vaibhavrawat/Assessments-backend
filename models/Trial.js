module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Assessment", {
    answers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true,
      },
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true,  //for development only
    },
  });
};