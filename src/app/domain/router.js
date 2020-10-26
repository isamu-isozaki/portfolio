/**
 * Author: Isamu Isozaki
 */
const router = require("express").Router();
const { authenticateUser } = require("@/middlewares/auth");

router.use(authenticateUser);

/**
 * Get
 */
const { getDomains } = require("./controllers/getDomains");
router.get("/", getDomains);

module.exports = router;