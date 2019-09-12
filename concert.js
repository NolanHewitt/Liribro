var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var artist = function() {
  // divider for the text log file
  var divider = "\n------------------------------------------------------------\n\n";

  // findartist takes in the name of an artist and searches the bandsintown API
  this.findArtist = function(artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // artistData ends up being the string containing the artist data we will print to the console
      var artistData = [
        "Venue: " + jsonData[0].venue.name,
        "Location: " + jsonData[0].venue.country + ", " + jsonData[0].venue.city,
        "Time: " + moment(jsonData[0].datetime).format("MM/DD/YYYY"),
      ].join("\n\n");

fs.appendFile("log.txt", artistData + divider, function(err) {
  if (err) throw err;
  console.log(artistData);
});
    });
  }};


module.exports = artist;