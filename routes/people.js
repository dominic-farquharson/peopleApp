// importing express
const express = require('express');
// invoking router method
const router = express.Router();

/* GET request for list of people */
router.get('/', function(req, res, next) {
  res.render('people/person', {title:'Person Route'})
});

/* Route for Creating a New Person */
router.get('/new', (req, res, next) => {
  res.send('new person');
});

/* Route for Posting New Person */
router.post('/', (req, res, next) => {
  res.send('posting new user');
});


/* Route for editing a person's info */


// exporting router
module.exports = router;
