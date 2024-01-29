const router = require("express").Router();
const { index, show, showByJenis, store, update, destroy } = require("../controllers/BooksController");

router.get("/", index);
router.get("/:id", show);
router.get("/jenis/:jenis", showByJenis);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
