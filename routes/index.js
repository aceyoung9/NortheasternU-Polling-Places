var express = require('express');
var router = express.Router();
var dormLookup = require("../public/javascripts/dorms.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Polling Places for Northeastern Huskies" });
});

// lol results
router.get('/results', function(req, res, next) {
  var dormName = req.query.dorm
  console.log(dormLookup[dormName]);
  res.render('results', { dormName: dormName });
});

module.exports = router;
