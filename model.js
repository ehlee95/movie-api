const mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    default: "eric!",
  },
  overview: String,
  tagline: String,
  budget: Number,
  genres: [String],
  homepage: String,
  release_date: Date,
  revenue: Number,
  runtime: Number,
  production_countries: [String],
  language: String,
  poster_path: String,
  popularity: Number,
  vote_average: Number,
  vote_count: Number,
});

module.exports = mongoose.model("Movie", movieSchema);
