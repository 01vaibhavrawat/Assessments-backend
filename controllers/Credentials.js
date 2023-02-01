require('dotenv').config();
const { Credentials } = require("../sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const asyncHandler = require("../middlewares/asyncHandler");

exports.create = asyncHandler(async (req, res, next) => {

  const password = req.body.password;

let hashedPassword;
  
bcrypt.genSalt(10, function (err, Salt) {
  
    bcrypt.hash(password, Salt, function (err, hash) {

        if (err) {
            return console.log('Cannot encrypt');
        }
  
        hashedPassword = hash;
      }
    });
  

  const credentials = await Credentials.create(password);

  await credentials.save();

  res.status(200).json({ success: true, data: "success" });
});

exports.all = async (req, res, next) => {
bcrypt.compare(password, hashedPassword, 
            async function (err, isMatch) {

            if (isMatch) {
                console.log('Encrypted password is: ', password);
                console.log('Decrypted password is: ', hashedPassword);
            }
  
            if (!isMatch) {
              
                console.log(hashedPassword + ' is not encryption of ' 
                + password);
            }
        })
  const user = await User.findAll();

  res.status(200).json({ success: true, data: user });
};

exports.refer = asyncHandler(async(req, res, next) => {
  const users = await User.findAll({
    where: {
      refer: req.query.refer
    } 
  })

  res.status(200).json({ success: true, data: users });
})