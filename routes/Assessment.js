const express = require("express");
const router = express.Router();
const { answers, all } = require("../controllers/Assessment.js");

/**
 * @swagger
 * paths:
 *  /end-user/banner/get:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Banner (End-user)
 *     summary: Gets the banner for store by id
 *     parameters:
 *       - name: store_id
 *         in : query
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

router.route("/").post(answers);
router.route("/").get(all);

module.exports = router;