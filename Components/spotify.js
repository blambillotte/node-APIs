// Import required modules and data
const importKeys = require('../Config/keys.js');
const Spotify = require('node-spotify-api');
const colors = require('colors');

const spotify = new Spotify({
  id: importKeys.spotify.clientID,
  secret: importKeys.spotify.clientSecret
});

const searchSpotify = (queryStr) => {

  spotify.search({ type: 'track', query: queryStr }, function(err, data) {
    if (err) {
      return console.log(`\nLiri Could Not Complete This Request: \n${colors.red(err)}`);
    }

    //Grab first simple reponses
    const songResponse = data.tracks.items[0];

    //Grab individual values from response
    const artistName = songResponse.artists[0].name;
    const songName = songResponse.name;
    const songURL = songResponse.external_urls.spotify;
    const songAlbum = songResponse.album.name;

    console.log('\n');
    console.log(`Artist Name: ${artistName.green}`);
    console.log(`Song Name: ${songName.green}`);
    console.log(`Song Link: ${songURL.blue.underline}`);
    console.log(`Album Name: ${songAlbum.green}`);

    const responseStrings = {
      artistName: `Artist Name: ${artistName.green}`,
      songName: `Song Name: ${songName.green}`,
      songLink: `Song Link: ${songURL.blue.underline}`,
      albumName: `Album Name: ${songAlbum.green}`
    };

  });
};




module.exports = {
  searchSpotify: searchSpotify
};
