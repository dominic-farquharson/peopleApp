// importing express
const express = require('express');
// invoking router method
const router = express.Router();
// importing sequelize model
const models = require('../db/models/index');

/* GET request for list of people */
router.get('/', (req, res, next) => {
  // using find all method to select all people from database
  models.Person.findAll({})
  // promise - renders all people after findall method
    .then( (people)=> {
      res.render('people/index', {
        // tab title
        title:'People',
        // passing people as JS object
        people: people
      })
    })
});

/* Route for Creating a New Person */
router.get('/new', (req, res, next) => {
  res.render('people/new', {title:'Create a Person'})
});

/* GET request for a specific person */
router.get('/:id', (req, res, next) => {
  /* Using sequelize's findbyid method to retrieve requested user */
  models.Person.findById(req.params.id)
  .then( (person)=> {
    res.render('people/person', {
      // setting person's name as tab title
      title: `${person.name}`,
      person: person
    })
  })
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
    res.redirect('/people/')
  });
});


/* Route for editing a person's info */


// exporting router
module.exports = router;
