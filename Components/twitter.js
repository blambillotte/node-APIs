// Import required modules and data
const importKeys = require('../Config/keys.js');
const Twitter = require('twitter');
const colors = require('colors');


const twitter = new Twitter({
  consumer_key: importKeys.twitter.key,
  consumer_secret: importKeys.twitter.clientSecret,
  access_token_key: importKeys.twitter.accessToken,
  access_token_secret: importKeys.twitter.tokenSecret
});

const params = {screen_name: 'ben_test_dev'};

const searchTwitter = () => {
  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log('---------'.green);
        console.log(`${'Tweet:'.magenta.bold} ${tweets[i].text}`);
        console.log(`${'Post Date:'.magenta.bold} ${tweets[i].created_at}`);
      }

    } else {
      console.error(error);
    }

  });
};


module.exports = {
  searchTwitter: searchTwitter
};
