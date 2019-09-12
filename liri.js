require("dotenv").config();
var fs = require("fs");

var movie = require("./movie");
var artist = require("./concert");
var SPOTIFY = require("./spotify");

// Create a new object
var movie = new movie();
var artist = new artist();
var SPOTIFY = new SPOTIFY();

var term = process.argv[2]
var search = process.argv.splice(3).join(" ");

if (!term || !search && term === "movie"){
    term = "movie"
    search = "2001"
};

if (!search && term === "concert"){
    search = "periphery"
};

if (!search && term === "spotify"){
    search = "hey you"
};

if (term === "movie") {
    movie.findMovie(search);
}
else if (term === "concert") {
    artist.findArtist(search);
}
else if (term === "spotify") {
    SPOTIFY.findSong(search);
}
else if (term === "doathing") {

    fs.readFile('random.txt', 'utf8', function(junk, data){
        var dataArr = data.split('.');
        console.log(dataArr);

        if (dataArr[0] === "spotify") {
            SPOTIFY.findSong(dataArr[1]);
        }
        else if (dataArr[0] === "concert") {
            artist.findArtist(dataArr[1]);
        }
        else if (dataArr[0] === "movie") {
            movie.findMovie(dataArr[1]);
        };
      })

};