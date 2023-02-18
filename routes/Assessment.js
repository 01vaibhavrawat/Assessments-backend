const express = require("express");
const router = express.Router();
const { answers, all } = require("../controllers/Assessment.js");

/**
 * @openapi
 * /assessment
 *  post:
 *    tags:
 *      - assessment
 *    description: Submits an assessment
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route("/").post(answers);

/**
 * @openapi
 * /assessment
 *  get:
 *    tags:
 *      - assessment
 *    description: Gets all the assessments in the database
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route("/").get(all);

module.exports = router;
