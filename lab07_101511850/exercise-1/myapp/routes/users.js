var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware setup
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// POST route
router.post('/', function(req, res, next) {
  console.log("Received Data:", req.body);
  res.send('POST received!');
});

module.exports = router;