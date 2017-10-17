const spotifyImport = require('./Components/spotify.js');
const twitterImport = require('./Components/twitter.js');
const omdbImport = require('./Components/omdb.js');
const logger = require('./Components/logger.js');
const logReader = require('./Components/read-log.js');
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
  //Log the search
  logger.updateLogs(searchType, 'N/A');
  break;

  case 'movie-this':
    if (searchString) {
      omdbImport.searchOMDB(searchString);
      //Log the search
      logger.updateLogs(searchType, searchString);
    } else {
      //If a user doesn't search for anything
      omdbImport.searchOMDB('Mr. Nobody');
    }
  break;

  case 'do-what-it-says':
  logReader.readLog();
  break;

  default:
  console.log(`
    🚨  🚨  🚨  🚨
    ${'Available Commands:'.green.bold} ${'(my-tweets, spotify-this-song, movie-this, do-what-it-says)'.red.bold}`);
}
