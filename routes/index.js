const router = require("express").Router();
const booksRoute = require("./BooksRoute");
const examplesRoute = require("./examples");
const youtubeRoute = require("./YoutubeRoute");

const URL = "/api/v1";

router.use(URL + "/examples", examplesRoute);
router.use(URL + "/books", booksRoute);
router.use(URL + "/youtube", youtubeRoute);

module.exports = router;
