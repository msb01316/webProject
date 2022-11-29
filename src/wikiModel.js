const mongoose = require("mongoose");

const wikiSchema = new mongoose.Schema(
  {
    title: String,
    img: String,
    text: String
  }
);

module.exports = mongoose.model("wikiModel", wikiSchema);