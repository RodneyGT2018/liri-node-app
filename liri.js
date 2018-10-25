// Set environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// Require for Bands in Town
var bandsintown = require('bandsintown')("codingbootcamp");

// Require node-spotify-api
var Spotify = require("node-spotify-api");

// Require fs (to read a file)
var fs = require("fs");

// Require moment
var moment = require("moment");

// Require request
var request = require("request");

// User action 
var userAction = process.argv[2];

// Title of artist, song or movie
var userTitle = process.argv[3];



// BANDS IN TOWN COMMAND CODE
var getBands = function (artist) {
    
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            var concert = JSON.parse(body);
            for (i = 0; i < concert.length; i++) {
                console.log("\nVenue: " + concert[i].venue.name);
                console.log("City: " + concert[i].venue.city + ", " + concert[i].venue.country);
                console.log(moment(concert[i].datetime).format("MM/DD/YY"));
                console.log("-----------------------------------------------");
            }
        } else {
            console.log(error);
            }
        });
    }


// SPOTIFY COMMAND CODE
var getSpotify = function (songName) {

var spotify = new Spotify(keys.spotifyKeys);

  // NPM package node-spotify-API
  spotify.search({ type: 'track', query: songName }, function (err, data) {
      if (err) {
          return console.log('Error occurred: ' + err);
      }
      // console.log(JSON.stringify(data, null, 2))
      
      var songs = data.tracks.items[0];

      // Console log Spotify
      console.log("\nArtist(s): " + songs.artists[0].name);
      console.log("Song Name: " + songs.name);
      console.log("Preview Song Link: " + songs.preview_url);
      console.log("Album with the Song Above: " + songs.album.name);
      console.log("-----------------------------------------------");

    });
}


// MOVIES COMMAND CODE
var getMovies = function (movieName) {

  // Run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  // Debug against the actual URL
  console.log(queryUrl);

  request(queryUrl, function (error, response, body) {

      // If the request is successful
      if (!error && response.statusCode === 200) {
          var movie = JSON.parse(body);

          // Movie title
          console.log("\nTitle: " + movie.Title);

          // Release year of movie
          console.log("Year the movie came out: " + movie.Year);

          // IMDB rating
          console.log("IMDB Rating: " + movie.imdbRating);

          // Rotten Tomatoes rating
          console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);

          // Country produced
          console.log("Country Produced: " + movie.Country);

          // Languages available
          console.log("Language(s) Available: " + movie.Language);

          // Plot synopsis
          console.log("Plot: " + movie.Plot);

          // Actors
          console.log("Actors: " + movie.Actors);

          console.log("-----------------------------------------------");
      }
  });

}


// DO-WHAT-IT-SAYS COMMAND CODE
var doIt = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log()

        getSpotify(data);
    });
}

// getBands, getSpotify, getMovies and doIt
var pick = function (caseData, functionData) {
  switch (caseData) {
      case "concert-this":
          getBands(functionData);
          break;
      case "spotify-this-song":
          getSpotify(functionData);
          break;
      case "movie-this":
          getMovies(functionData);
          break;
      case "do-what-it-says":
          doIt();
          break;
      default:
          console.log("LIRI does not know that - please try again.");
  }
}

pick(userAction, userTitle);