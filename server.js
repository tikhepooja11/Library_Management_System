const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book");

const router = express(); //ask for router to express

//now connect to mongoDB
mongoose
  .connect(`mongodb://localhost:27017/booksdb`, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log(`connected to mongoDB dataBase`);
  })
  .catch((error) => {
    console.log(`Unable to connect to DB`);
    console.log(error);
  });

router.listen(3000, () => {
  console.log(`server started on port 3000`);
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/ping", function (req, res) {
  res.send("api working");
});

router.use("/bookRoute", bookRoute);