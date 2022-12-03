const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "setup is required"],
    },
    punchline: {
      type: String,
      required: [true, "punchline is required"],
    },
  },
  { timestamps: true }
);

const Jokes = mongoose.model("Jokes", JokesSchema);

// option 1: export the whole file as Destination model
module.exports = Jokes;

// option 2: export the whole file as an object, with Destination as the key/value
// module.exports = {Destination: Destination}
// module.exports.Destination = mongoose.model('Destination', DestinationSchema);
