require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./models/User");
const CredentialsModel = require("./models/Credentials");

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  logging: false,
  dialect: 'postgres',
  host: process.env.PGHOST,
});

const User = UserModel(sequelize, DataTypes);
const Credentials = CredentialsModel(sequelize, DataTypes);

User.hasOne(Credentials, {
  foreignkey: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

(async () => await sequelize.sync({ alter: true }))();

module.exports = {
  User,
  Credentials,
};