const fs = require('fs');


const updateLogs = (command, searchString) => {

  fs.readFile("Logs/logs.json", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    //Grab the whole JSON object and parse it
    let parsedData = JSON.parse(data);

    //Create a new Log entry
    let newLog = { command: command.trim(), searchString: searchString.trim() };

    //Add the new entry to the begining in the array of objects
    parsedData.logs.unshift(newLog);

    //Re-write file with new data
    saveLog(parsedData);
  });
};


function saveLog(logs) {

  let stringLogs = JSON.stringify(logs);

  fs.writeFile('Logs/logs.json', stringLogs, (err) => {
  if (err) throw err;
  });

}



module.exports = {
  updateLogs: updateLogs
};
