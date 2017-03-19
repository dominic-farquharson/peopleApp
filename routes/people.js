// importing express
const express = require('express');
// invoking router method
const router = express.Router();

/* GET request for list of people */
router.get('/', function(req, res, next) {
  res.send('People route');
});

// exporting router
module.exports = router;
