var axios = require("axios");
var fs = require("fs");

var movie = function() {
  // divider for the text log file
  var divider = "\n------------------------------------------------------------\n\n";

  // findmovie takes in the name of a movie and searches the omdb API
  this.findMovie = function(movie) {
    var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // movieData ends up being the string containing the movie data we will print to the console
      var movieData = [
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDB: " + jsonData.Ratings[0].Value,
        "Rotten Tomatos: " + jsonData.Ratings[1].Value,
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors,
      ].join("\n\n");
console.log(movieData);

fs.appendFile("log.txt", movieData + divider, function(err) {
  if (err) throw err;
  console.log(movieData);
});
    });
  }};


module.exports = movie;