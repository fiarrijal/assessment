const router = require("express").Router();
const { index } = require("../controllers/YoutubeController");

router.get("/", index);

module.exports = router;
