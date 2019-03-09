var express = require("express");
var fs = require("fs");
var VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
var visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: "zPSI72v2LBtVZF0SQJ4n7KKMuhw51hbMKWdORPcPupEc"
});

var data = require("./xing.json");
var bankingData = require("./banking.json");

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

  var classifier_ids = ["Bilderkennung_374328132"];
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

app.get("/getBankingInformation", function(req, res) {
  res.json(bankingData);
});

app.get("/getLifeAnalysisLite", function(req, res) {
  let respose = {};

  respose.statements = [
    {
      text:
        "Liebe Julia du verbringst mehr Zeit auf der Arbeit als Zuhause. Insgesamt arbeitest du mehr als 4,6% der Deutschen."
    },
    {
      text: "Du trennst berufliches und privates stark voneinander."
    },
    {
      text:
        "Familie und Freunde sind dir am wichtigsten daher verbringst du 4 Stunden die Woche mit Ihnen."
    },
    {
      text:
        "Deine Freizeit verbringst du am liebsten mit Shopping und Beaty Mit Beauty verbringst du 2,2 Stunden die Woche mit Shopping  2,7 Stunden. Am liebsten shoppst du Zuhause (Online Shopping) manchmal gehst du aber auch in Läden und probierst die Klamotten noch aus"
    }
  ];
  res.json(respose);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/getXingProfile", function(req, res) {
  let user = {};

  user.education = data.users[0].educational_background;
  user.interests = data.users[0].interests;
  user.language = data.users[0].languages;

  res.json(user);
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
