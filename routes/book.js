const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book");

router.get("/viewAllBooks", BookController.viewAllBooks);
router.get("/getBookById/:bookId", BookController.getBookById);
router.post("/addBook", BookController.AddBook);
router.patch("/updateBook/:bookId", BookController.updateBook);
router.delete("/deleteBook/:bookId", BookController.deleteBook);
module.exports = router;
