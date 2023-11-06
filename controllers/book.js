const bookModel = require("../models/book");
const mongoose = require("mongoose");

const AddBook = (request, response) => {
  console.log("inside AddBook()");
  const { title, author, summary } = request.body;
  const newBook = new bookModel({
    _id: new mongoose.Types.ObjectId(),
    title,
    author,
    summary,
  });

  return newBook
    .save()
    .then((book) => response.send(book))
    .catch((error) => response.json("error in adding a new book " + error));
};

const viewAllBooks = (request, response) => {
  console.log("inside viewAllBooks()");
  return bookModel
    .find()
    .then((books) => response.send(books))
    .catch((error) => response.json("error in listing all books " + error));
};

const getBookById = (req, res) => {
  console.log(`inside getBookById()`);
  const bookId = req.params.bookId;
  console.log(bookId);
  return bookModel
    .findById(bookId)
    .then((book) => res.send(book))
    .catch((error) =>
      res.status(404).json({ message: "book id not found" }).send(error)
    );
};

const updateBook = (req, res) => {
  console.log(
    `inside updateBook() from backend   ":` + JSON.stringify(req.body)
  );

  const bookId = req.params.bookId;
  const bookUpdate = req.body;
  return bookModel
    .findByIdAndUpdate(bookId, bookUpdate, { new: true })
    .then((book) => res.send(book))
    .catch((error) => res.status(404).json({ message: "book id not found" }));
};

const deleteBook = function (req, res) {
  console.log(`inside deleteBook()`);
  const bookId = req.params.bookId;
  console.log(bookId);

  return bookModel
    .findByIdAndDelete(bookId)
    .then((book) => res.status(201).json({ message: "Book deleted" }))
    .catch((error) =>
      res.status(404).json({
        message: "Book id not found, Please enter correct book ID !!!  ",
      })
    );
};
module.exports = {
  AddBook,
  viewAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
