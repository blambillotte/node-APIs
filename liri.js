const spotifyImport = require('./Components/spotify.js');
const twitterImport = require('./Components/twitter.js');
const omdbImport = require('./Components/omdb.js');
const logger = require('./Components/logger.js');
const colors = require('colors');


//Recieve user input
const searchType = process.argv[2];
let searchString = '';

for (let i = 3; i < process.argv.length; i++) {
  searchString += `${process.argv[i]} `;
}

//Both input paremeters must be present to search the api
switch (searchType) {
  case 'spotify-this-song':
    //Call Spotify API
    spotifyImport.searchSpotify(searchString);
    //Log the search
    logger.updateLogs(searchType, searchString);
  break;

  case 'my-tweets':
  twitterImport.searchTwitter();
  break;

  case 'movie-this':
    if (searchString) {
      omdbImport.searchOMDB(searchString);
    } else {
      //If a user doesn't search for anything
      omdbImport.searchOMDB('Mr. Nobody');
    }
  break;

  default:
  console.log(`
    🚨  🚨  🚨  🚨
    ${'Available Commands:'.green.bold} ${'(my-tweets, spotify-this-song, movie-this, do-what-it-says)'.red.bold}`);
}
