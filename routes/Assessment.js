const express = require("express");
const router = express.Router();
const { answers, all } = require("../controllers/Assessment.js");

router.route("/").post(answers);
router.route("/").get(all);

module.exports = router;