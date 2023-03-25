const express = require("express");
const router = express.Router();
const { answers, all } = require("../controllers/Assessment.js");

/**
 * @openapi
 * /trial
 *  post:
 *    tags:
 *      - trial
 *    description: register for trial
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route("/").post(answers);

/**
 * @openapi
 * /trial
 *  get:
 *    tags:
 *      - admin
 *    description: Gets all the assessments in the database
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route("/").get(all);

module.exports = router;
