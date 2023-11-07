require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book");

const router = express(); //ask for router to express

//now connect to mongoDB
mongoose
  .connect(process.env.MONGO_URL, {
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

const PORT = process.env.PORT || 3030;

router.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
  document.write("Welcome to Library Management system - CRUD Node js app");
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/ping", function (req, res) {
  res.send("api working");
});

router.use("/bookRoute", bookRoute);
