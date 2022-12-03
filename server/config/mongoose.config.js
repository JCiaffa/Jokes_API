const mongoose = require("mongoose");

//will create database with name here
mongoose
  .connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established Connection to jokes_db"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
