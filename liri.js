const spotifyImport = require('./Components/spotify.js');


//Listen for user input on type of API to call
const searchType = process.argv[2];
const searchString = process.argv[3];

//Both input paremeters must be present to search the api
if (searchString && searchType) {
  switch (searchType) {
    case 'spotify-this-song':
    spotifyImport.searchSpotify(searchString);
    break;

    case 'test':
    console.log('Test');
    break;

    default:
    console.log('I do not know that Command');
  }

} else {
  console.log('Not enough paremeters added');
}
