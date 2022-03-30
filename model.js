const mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  overview: String,
  tagline: String,
  genres: [String],
  homepage: String,
  release_date: Date,
  revenue: Number,
  budget: Number,
  runtime: Number,
  production_companies: [String],
  production_countries: [String],
  language: String,
  spoken_languages: [String],
  poster_path: String,
  backdrop_path: String,
  popularity: Number,
  vote_average: Number,
  vote_count: Number,
});

module.exports = mongoose.model("Movie", movieSchema);
