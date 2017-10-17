// Include the request npm package
const request = require('request');
const colors = require('colors');
const importKeys = require('../Config/keys.js');


const endpoint = 'http://www.omdbapi.com/';
const APIKey = importKeys.omdb.key;


const searchOMDB = (searchString) => {

  const URL = encodeURI(`${endpoint}/?t=${searchString}&y=&plot=short&apikey=${APIKey}`);

  // Then run a request to the OMDB API with the movie specified
  request(URL, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

      let parsedResponse = JSON.parse(body);

      // Print the reponse
      console.log('\n---------------------'.rainbow);
      console.log(`${parsedResponse.Title} was produced in ${parsedResponse.Year} by ${parsedResponse.Production} in ${parsedResponse.Language}.`.green);

      //Not all movies have asociated ratings
      if (parsedResponse.Ratings.length >= 2) {
        console.log(`Rated ${parsedResponse.Ratings[0].Value} by IMDB and ${parsedResponse.Ratings[1].Value} by Rotten Tomatoes.`.blue);
      }

      console.log(`Plot Summary: ${parsedResponse.Plot}`.red);
      console.log(`Staring: ${parsedResponse.Actors}`.yellow);


    }
  });
};


module.exports = {
  searchOMDB: searchOMDB
};
