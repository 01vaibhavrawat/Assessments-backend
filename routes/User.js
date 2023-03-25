const express = require("express");
const router = express.Router();
const { all, signup, refer, contact } = require("../controllers/User.js");

router.route("/").post(signup);
router.route("/").get(all);
router.route("/refer").get(refer);
router.route("/contact").post(contact);

module.exports = router;