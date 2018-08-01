require("dotenv").config();
var keys = require("./key.js");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");
var model = process.argv[2];
var input = process.argv.slice(3).join(" ");

var client = new Twitter(keys.twitter);

var sclient = new Spotify(keys.spotify);

if (model === "my-tweets") {
    var count = 0;
    client.get("statuses/user_timeline", { screen_name: "HuCharles1" }, function (error, tweets, response) {
        console.log("inside");
        if (error)
            console.log(JSON.stringify(error));
        else {
            tweets.forEach(function (element) {
                console.log(count + ":" + element.text);
                count++;
            })
        }
    });
}
else if (model === "spotify-this-song") {
    sclient.search({ type: "track", query: input, limit: 1 }, function (err, data) {
        if (err)
            console.log(JSON.stringify(err));
        else {
            var result = data.tracks.items;
            result.forEach(function (element) {
                console.log("Song Name: " + element.name);
                console.log("Artist:" + element.album.artists[0].name);
                console.log("Album: " + element.album.name);
                console.log("Preview Link: " + element.external_urls.spotify);
            })
        }

    });
}
else if (model === "movie-this") {
    var title;
    var year;
    var IMDB;
    var Roten;
    var country;
    var language;
    var plot;
    var actors;
    // if (input == null) {

    //     var URL = "http://www.omdbapi.com/?t=" + "Mr.Nobody" + "&y=&plot=short&apikey=trilogy";
    //     request(URL, function (error, respose, body) {
    //         title = JSON.parse(body).Title;
    //         year = JSON.parse(body).Year;
    //         IMDB = JSON.parse(body).imdbRating;
    //         Roten = JSON.parse(body).Ratings[1].Value;
    //         country = JSON.parse(body).Country;
    //         plot = JSON.parse(body).Plot;
    //         language = JSON.parse(body).Language;
    //         actors = JSON.parse(body).Actors;
    //     })
    // }
    // else {
    var URL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    request(URL, function (error, respose, body) {
        console.log(JSON.parse(body).Title)
        // title = JSON.parse(body).Title;
        // year = JSON.parse(body).Year;
        // IMDB = JSON.parse(body).imdbRating;
        // Roten = JSON.parse(body).Ratings[1].Value;
        // country = JSON.parse(body).Country;
        // plot = JSON.parse(body).Plot;
        // language = JSON.parse(body).Language;
        // actors = JSON.parse(body).Actors;
        console.log("Title:" + JSON.parse(body).Title + "\n" +
            "Year:" + JSON.parse(body).Year + "\n" +
            "IMDB Rating:" + JSON.parse(body).imdbRating + "\n" +
            "Roten Rating:" + JSON.parse(body).Ratings[1].Value + "\n" +
            "Country:" + JSON.parse(body).Country + "\n" +
            "Plot:" + JSON.parse(body).Plot + "\n" +
            "Language:" + JSON.parse(body).Language + "\n" +
            "Actors:" + JSON.parse(body).Actors + "\n")
    })


}