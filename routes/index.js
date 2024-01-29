const router = require("express").Router();
const booksRoute = require("./BooksRoute");
const examplesRoute = require("./examples");

const URL = "/api/v1";

router.use(URL + "/examples", examplesRoute);
router.use(URL + "/books", booksRoute);

module.exports = router;
