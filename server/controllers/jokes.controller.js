// option 1: exporting the whole file
const Jokes = require("./../models/jokes.model");

// option 2: exporting the whole file as an object, with key/value pair
// const {Destination} = require("./../models/destination.model")

module.exports.testApi = (req, res) => {
  res.json({ Status: "ok" });
};

// get all
module.exports.allJokes = (req, res) => {
  Jokes.find()
    .then((allJoke) => res.json(allJoke))
    .catch((err) => res.json(err));
};

// get one
module.exports.oneJoke = (req, res) => {
  const paramsId = req.params.id;
  Jokes.findOne({ _id: paramsId })
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
};

// create
module.exports.addJoke = (req, res) => {
  const newJoke = req.body;
  Jokes.create(newJoke)
    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
};

// update -- getOne + create
module.exports.updateJoke = (req, res) => {
  const paramsId = req.params.id;
  const updatedJoke = req.body;
  Jokes.findOneAndUpdate(
    { _id: paramsId }, // criteria
    updatedJoke, // update info
    { new: true, runValidators: true }
    // new : true --> return the updated object
    // runValidation --> to run validations
  )
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => res.json(err));
};

// delete
module.exports.deleteJoke = (req, res) => {
  Jokes.findOneAndDelete({ _id: req.params.id })
    .then((deletedJoke) => res.json(deletedJoke))
    .catch((err) => res.json(err));
};
