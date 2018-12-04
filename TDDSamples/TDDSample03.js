var iData = require("./TDDSampleExp");
var data = iData.myData;

for(var key in data){
    console.log(data[key]);
}

var request = require("request");

// We then run the request module on a URL with a JSON
request("http://www.omdbapi.com/?apikey=70b61d35&t=remember+the+titans", function(error, response, body) {
    // console.log(body);

//   If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Then we print out the imdbRating
    // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("The movie'data: " + JSON.stringify(body));
  }
});