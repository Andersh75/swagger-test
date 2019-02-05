var express = require("express");
var router = express.Router();

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
// define the about route
router.get("/api/users", function(req, res) {
  res.send({
    name: "name",
    email: "email",
    age: 20,
    sex: "sex"
  });
});

module.exports = router;
