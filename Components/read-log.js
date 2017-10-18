const fs = require('fs');
const path = require('path');

//Set path to the Logs
const ABSOLUTE_LOG_PATH = path.resolve('./Logs/logs.json');

const readLog = () => {


  fs.readFile(ABSOLUTE_LOG_PATH, function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    //Grab the whole JSON object and parse it
    let parsedData = JSON.parse(data);


    console.log(`\n Run this Command in your terminal: $`.green.bold, `node liri ${parsedData.logs[0].command} ${parsedData.logs[0].searchString}`.red);

  });
};

module.exports = {
  readLog: readLog
};
