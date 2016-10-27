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
  var singleDorm = dormLookup[dormName];

  res.render('results', { dormName: dormName,
    address: singleDorm.address,
    pollingLoc: singleDorm.pollingLoc,
    pollingAddress: singleDorm.pollingAddress,
    instructions: singleDorm.instructions,
    wardNo: singleDorm.ward,
    precinctNo: singleDorm.precinct});
});

module.exports = router;
