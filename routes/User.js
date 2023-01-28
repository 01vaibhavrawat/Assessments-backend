const express = require("express");
const router = express.Router();
const { all, signup, refer } = require("../controllers/User.js");

router.route("/").post(signup);
router.route("/").get(all);
router.route("/refer").get(refer);

module.exports = router;