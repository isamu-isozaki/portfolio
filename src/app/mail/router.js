/**
 * Author: Isamu Isozaki
 */
const router = require("express").Router();
const { authenticateUser } = require("@/middlewares/auth");

router.use(authenticateUser);
/**
 * Get
 */
const { getMails } = require("./controllers/getMails");
router.get("/", getMails);

/**
 * Post
 */
const { postMail } = require("./controllers/postMail");
router.post("/", postMail);

module.exports = router;