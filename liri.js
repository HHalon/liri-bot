// * `concert-this`

//`spotify-this-song`

//`movie-this`

//`do-what-it-says`

var Spotify = require('node-spotify-api');
var axios = require("axios") 
var movieName = process.argv[3];
var artist = process.argv[3];

require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

if (command === 'concert-this') {
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



axios.get(queryUrl).then(
  function(response) {
    console.log(response.data);

   
  }
);
}
else if(command === "spotify-this-song"){
spotify
spotify.search({ type: 'artist', query: process.argv[3] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.artists); 
console.log(data.songs);
});
}
else if(command === 'movie-this'){
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);

  axios.get(queryUrl).then(
    function(response) {
      console.log("Title : " + response.data.Title)
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.RottenTomatoes);
      console.log("Country of where it was filmed: " + response.data.Country);
      console.log("Language of the movie: " + response.data.Language);
      console.log("Plot of the movie: " + response.data.Plot);
      console.log("Actors in the movie: " + response.data.Actors);
    }
  );
}
else{

};







