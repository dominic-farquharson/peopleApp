// importing express
const express = require('express');
// invoking router method
const router = express.Router();
// importing sequelize model
const models = require('../db/models/index');

/* GET request for list of people */
router.get('/', function(req, res, next) {
  res.render('people/person', {title:'Person Route'})
});

/* Route for Creating a New Person */
router.get('/new', (req, res, next) => {
  res.render('people/new', {title:'Create a Person'})
});

/* Route for Posting New Person */
router.post('/', (req, res, next) => {
  // Creating a new Person record, using the sequelize model create method
  models.Person.create({
    // name received from request object
    name: req.body.name,
    // favorite city received from request object
    favoriteCity: req.body.favoriteCity
  })
  // using promise to redirect to people route after successful post to /people
  .then( ()=> {
    res.redirect('/people')
  });
});


/* Route for editing a person's info */


// exporting router
module.exports = router;
