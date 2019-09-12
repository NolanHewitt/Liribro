require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

// Function for running a Spotify search
var SPOTIFY = function() {
    // divider for the text log file
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function(song) {
    spotify.search(
      {
        type: "track",
        query: song,
        limit: 1
      },
      function(junk, data) {
        var songs = data.tracks.items;

            var songData = [
          "Artist name: " + songs[0].artists[0].name,
          "Song title: " + songs[0].name,
          "Album: " + songs[0].album.name,
          "Preview song: " + songs[0].preview_url,
            ].join("\n\n");

            console.log(songData);
    
        fs.appendFile("log.txt", songData + divider, function(err) {
            if (err) throw err;
          });

    });
  }
};

module.exports = SPOTIFY;