require("dotenv").config();

//variables
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var moment = require("moment");
var fs = require("fs");
var argOne = process.argv[2];
var argTwo = process.argv.slice(3).join(" ");


//functions

//spotify function
function getSpotify(songName) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log(data.tracks.items[0].name);
            console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
            console.log("Song name: " + data.tracks.items[0].name);
            console.log("Song preview: " + data.tracks.items[0].album.external_urls.spotify);
            console.log("Album name: " + data.tracks.items[0].album.name);
        }
    });
};

//movie-this function
function getMovie(movieName) {
    var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(url, function (error, response, body) {
        var jsonData = JSON.parse(body);
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Title: ' + jsonData.Title);
            console.log('Year: ' + jsonData.Year);
            console.log('IMDB Rated: ' + jsonData.imdbRating);
            console.log('Rotten Tomatoes Rated: ' + jsonData.tomatoRating);
            console.log('Country: ' + jsonData.Country);
            console.log('language ' + jsonData.Language);
            console.log('Plot: ' + jsonData.Plot);
            console.log('Actors: ' + jsonData.Actors);
        }
    });
};
//Concert-this function
function getConcert(artist) {
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";

    request(url, function (error, response, body) {
        var jsonData = JSON.parse(body);
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Venue: ' + jsonData[0].venue.name);
            console.log('Venue location : ' + jsonData[0].venue.city + ", " + jsonData[0].venue.region);
            var eventDate = moment(jsonData[0].datetime).format("MM/DD/YYYY");
            console.log("Date: " + eventDate);
        }
    });
};

//do-what-it-says function
function getDoWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var randomAction = data.split(",");
        searchItem = randomAction[1];
        getSpotify(searchItem);
    });
}





function pickFunction(caseData, functionData) {
    switch (caseData) {
        case 'movie-this':
            getMovie(functionData);
            break;
        case 'concert-this':
            getConcert(functionData);
            break;
        case 'do-what-it-says':
            getDoWhatItSays();
            break;
        case 'spotify-this-song':
            if (functionData == "") {
                functionData = "The Sign Ace";
            }
            getSpotify(functionData);
            break;
        default:
            console.log("Did not work")

    };
};





//initial function call
pickFunction(argOne, argTwo);

