# Movies API

### How to use this API:

This REST API is seeded with data from the 7,000 most popular English language films stored in the TMDB database. It stores data in JSON movie records, and offers CRUD functionality using intuitive paths. Movies can be searched and selected using their TMDB ID number, which is accessible via the /ids path.

#### Available fields:
- id: TMDB ID
- title: Movie title
- overview: Short overview of the movie's plot and premise
- tagline: Tagline used for marketing
- genres: Array of applicable movie genres
- homepage: Movie website
- release_date: Date of theatrical release
- revenue: Revenue earned by film
- budget: Production budget
- runtime: Length of film in minutes
- production_companies: Array of companies involved with the production
- production_countries: Array of countries where movie was filmed
- language: Primary language spoken in the movie
- spoken_languages: Array of all languages that appear in the movie
- poster_path: Link to full-sized image of movie poster
- backdrop_path: Link to full-sized backdrop image
- popularity: Popularity score calculated by TMDB
- vote_average: Average rating according to TMDB users
- vote_count: Number of votes received by the film

# Paths

## GET /

Returns "Movie API"

## GET /movies

Returns first 20 records in the movies API. By default the records are sorted in descending order of popularity.

## GET /ids

Returns all records with their names and IDs. This is useful if you're seeking a particular movie's ID

## GET /movies/:id

Returns one movie with the ID specified in the HTTP request

## PUT /movies/:id

Finds an existing movie specified in the HTTP request, then updates fields with the JSON submitted in the body of the PUT request

## POST /movies/

Creates a new movie using the JSON submitted in the body of the POST request

## DELETE /movies/:id

Deletes a movie specified by the ID


