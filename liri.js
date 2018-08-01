require("dotenv").config();
var keys = require("./key.js");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var model = process.argv[2];
var client = new Twitter(keys.twitter);
var spodify=new spotify
if (model === "my-tweets") {
    client.get("statuses/user_timeline", { screen_name: "HuCharles1" }, function (error, tweets, response) {
        console.log("inside");
        if (error)
            console.log(JSON.stringify(error));
        else {
            tweets.forEach(function (element) {
                console.log(element.text)
            })
        }
    });
}