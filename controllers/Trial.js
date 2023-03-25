const { Assessment } = require("../sequelize");
const asyncHandler = require("../middlewares/asyncHandler");

exports.answers = asyncHandler(async (req, res, next) => {

  const answers = await Assessment.create(req.body);

  await answers.save();

  const payload = { answers: answers.answers };

  res.status(200).json({ success: true, data: payload });
});

exports.all = async (req, res, next) => {

  const assessments = await Assessment.findAll();

  res.status(200).json({ success: true, data: assessments });
};