let express = require("express");
let data = require("./data.json");

// created instance
let server = express();

server.get("/movies", function (req, res) {
  res.json(data);
});

server.get("/genre", function (req, res) {
  let genreData = [];
  let uniqueIds = {};
  for (let i = 0; i < data.length; i++) {
    let movie = data[i];
    let genreId = movie.genre._id;
    let genreName = movie.genre.name;

    if (!uniqueIds.hasOwnProperty(genreId)) {
      let temp = {};
      temp["_id"] = genreId;
      temp["name"] = genreName;
      uniqueIds[genreId] = "true";

      genreData.push(temp);
    }
  }

  res.json(genreData);
});

server.listen(4000);
