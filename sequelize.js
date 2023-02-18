require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./models/User");
const ContactModel = require("./models/Contact");
const CredentialsModel = require("./models/Credentials");
const AssessmentModel = require("./models/Assessment");

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  logging: false,
  dialect: 'postgres',
  host: process.env.PGHOST,
});

const User = UserModel(sequelize, DataTypes);
const Credentials = CredentialsModel(sequelize, DataTypes);
const Assessment = AssessmentModel(sequelize, DataTypes);
const Contact = ContactModel(sequelize, DataTypes);

User.hasOne(Credentials, {
  foreignkey: {
    type: DataTypes.STRING,
    allowNull: true, //for development only
  }
});

User.hasMany(Assessment, {
  foreignkey: {
    type: DataTypes.STRING,
    allowNull: true, //for development only
  }
});
Assessment.belongsTo(User);

User.hasMany(Contact, {
  foreignkey: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
Assessment.belongsTo(User);

(async () => await sequelize.sync({ alter: true }))();

module.exports = {
  User,
  Credentials,
  Assessment,
  Contact,
};