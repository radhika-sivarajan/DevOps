var iData = require("./Sample03Exp");
var data = iData.myData;

for (var key in data) {
  console.log(data[key]);
}

var request = require("request");
var movieName = process.argv[2];

// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?apikey=70b61d35&t=" + movieName, function (error, response, body) {
  //   If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {
    // Then we print out the data
    console.log("The details of movie " + JSON.parse(body).Title);
    console.log(JSON.parse(body, null, 2));
  }
});