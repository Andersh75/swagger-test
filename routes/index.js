var express = require("express");
var router = express.Router();

const apiCtrl = require("../controllers");

/**
 * @swagger
 * definition:
 *   posts:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: string
 *       author:
 *         type: integer
 *
 *   departments:
 *     properties:
 *       code:
 *         type: string
 *       name:
 *         type: integer
 *
 *   names:
 *     properties:
 *       name:
 *         type: integer
 */
/**
 * @swagger
 * /api/posts:
 *   get:
 *     tags:
 *       - posts
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#/definitions/posts'
 * /api/departments:
 *   get:
 *     tags:
 *       - departments
 *     description: Returns all departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of departments
 *         schema:
 *           $ref: '#/definitions/departments'
 * /api/names:
 *   get:
 *     tags:
 *       - names
 *     description: Returns all names
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of names
 *         schema:
 *           $ref: '#/definitions/names'
 */
// define the about route
router.route("/posts").get(apiCtrl.getPosts);
router.route("/departments").get(apiCtrl.getDepartments);
router.route("/names").get(apiCtrl.getNames);

module.exports = router;
