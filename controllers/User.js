require('dotenv').config();
const { User, Contact } = require('../sequelize');
const { sign } = require('jsonwebtoken');
const asyncHandler = require('../middlewares/asyncHandler');

exports.signup = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  await user.save();

  const payload = { email: user.email };
  const token = sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({ success: true, data: token });
});

exports.all = asyncHandler(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ success: true, data: users });
});

exports.refer = asyncHandler(async (req, res, next) => {
  const users = await User.findAll({
    where: {
      refer: req.query.refer,
    },
  });
  res.status(200).json({ success: true, data: users });
});

exports.contact = asyncHandler(async (req, res, next) => {
  try {
    const data = await Contact.create(req.body);
    await data.save();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    next(error);
  }
});
