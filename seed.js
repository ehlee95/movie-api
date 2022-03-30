const axios = require("axios");
const connection = require("./connection");
const Movie = require("./model");

let idArray = [];

async function seed() {
  for (let i = 1; i < 93; i++) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1268559c82658ea7a0a76faab2be0cbd&language=en-US&sort_by=vote_count.desc&include_video=false&page=${i}&vote_count.gte=2000`
    );
    response.data.results.forEach((movie) => {
      idArray.push(movie.id);
    });
  }
  for (let i = 0; i < idArray.length; i++) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${idArray[i]}?api_key=1268559c82658ea7a0a76faab2be0cbd&language=en-US`
    );

    let record = response.data;

    let countryArray = [];
    let genreArray = [];

    response.data.production_countries.forEach((country) => {
      countryArray.push(country.name);
    });

    response.data.genres.forEach((genre) => {
      genreArray.push(genre.name);
    });

    record.production_countries = countryArray;
    record.genres = genreArray;

    Movie.create(record);
  }
  process.exit();
}
seed();
