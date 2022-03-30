const axios = require("axios");
const connection = require("./connection");
const Movie = require("./model");

let idArray = [];

// pull 7000 most popular movie IDs from TMDB
async function seed() {
  for (let i = 1; i < 351; i++) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1268559c82658ea7a0a76faab2be0cbd&language=en-US&sort_by=vote_count.desc&include_video=false&page=${i}&vote_count.gte=300`
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

    let companyArray = [];
    response.data.production_companies.forEach((company) => {
      companyArray.push(company.name);
    });
    record.production_companies = companyArray;

    let languageArray = [];
    response.data.spoken_languages.forEach((language) => {
      languageArray.push(language.english_name);
    });
    record.spoken_languages = languageArray;

    let countryArray = [];
    response.data.production_countries.forEach((country) => {
      countryArray.push(country.name);
    });
    record.production_countries = countryArray;

    let genreArray = [];
    response.data.genres.forEach((genre) => {
      genreArray.push(genre.name);
    });
    record.genres = genreArray;

    record.backdrop_path =
      "https://image.tmdb.org/t/p/original" + response.data.backdrop_path;
    record.poster_path =
      "https://image.tmdb.org/t/p/original" + response.data.poster_path;

    Movie.create(record);
  }
  process.exit();
}
seed();
