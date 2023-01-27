require('dotenv').config();
const { User } = require("../sequelize");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middlewares/asyncHandler");

exports.signup = asyncHandler(async (req, res, next) => {

  const user = await User.create(req.body);

  await user.save();

  const payload = { email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({ success: true, data: token });
});

exports.all = async (req, res, next) => {

  const user = await User.findAll();

  res.status(200).json({ success: true, data: user });
};