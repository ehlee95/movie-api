let connection = require("./connection");
let mongoose = require("mongoose");
let express = require("express");
let Movie = require("./model");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json());

// checks if root endpoint works
app.get("/", (request, response) => {
  response.send("Movies DB");
});

// get one by TMDB id (works)
app.get("/movies/:id", (request, response) => {
  let movieId = request.params.id;
  Movie.find({ id: movieId }).then((movie) => response.json(movie));
});

// get first 20 TMDB records (works)
app.get("/movies", (request, response) => {
  Movie.find({})
    .then((movies) => {
      let small = movies.slice(0, 20);
      response.json({ small });
    })
    .catch((err) => console.error(err));
});

// get a list of all movie titles with IDs (works)
app.get("/ids", (request, response) => {
  Movie.find({})
    .select("title id -_id")
    .then((results) => response.json(results));
});

// update a movie by ID (works)
app.put("/movies/:id", (request, response) => {
  let tmdbId = request.params.id;
  let newData = request.body;
  console.log(request);
  Movie.find({ id: tmdbId }).then((result) => {
    console.log(newData);
    return Movie.findByIdAndUpdate(result[0]._id, newData, { new: true }).then(
      () => response.send("Updated")
    );
  });
});

// create a movie using JSON from request body (works)
app.post("/movies/", (request, response) => {
  let newMovie = request.body;
  Movie.create(newMovie)
    .then(() => {
      response.send("created new movie");
    })
    .catch((err) => console.error(err));
});

// delete a movie by ID (works)
app.delete("/movies/:id", (request, response) => {
  let tmdbId = request.params.id;
  Movie.find({ id: tmdbId })
    .then((result) => {
      // why do you have to return this value to make it work
      return Movie.findByIdAndRemove(result[0]._id);
    })
    .then((x) => response.send({ message: x }))
    .catch((err) => console.error(err));
});

// create server, listen on port 9000
const PORT = 9000;
let server = app.listen(process.env.PORT || 9000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

server.on("listening", () => console.log("listening on port " + PORT));
server.on("error", (error) => console.error("server error", error));
