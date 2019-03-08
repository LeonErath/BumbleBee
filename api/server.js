var express = require("express");
var fs = require("fs");
var VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
var visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: "N7mn7WubFkQ1oO_XhVBUv3DGd_YWYJSJMt31xDtvEkdW"
});

var app = express();
app.use(express.static("public"));
const PORT = 4000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/detectCategorie", function(req, res) {
  // var image_url = req.param.url
  var images_file = fs.createReadStream(__dirname + "/public/images/car.jpeg");

  var classifier_ids = ["DetectCars_648603742"];
  var threshold = 0.6;

  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };

  visualRecognition.classify(params, function(err, response) {
    if (err) {
      res.send(err);
    } else {
      res.json(response);
    }
  });
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
