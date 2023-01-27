const express = require("express");
const router = express.Router();
const { all, signup } = require("../controllers/User.js");

router.route("/signup").post(signup);
router.route("/all").get(all);

module.exports = router;
/*
        const {
            fullname,
            email,
            country,
            dob,
            pronouns,
        } = req.body*/