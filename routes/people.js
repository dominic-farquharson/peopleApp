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
    .catch( (error)=> {
      res.send(`Person ${req.params.id} does not exist`)
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
  .catch( (error)=> {
    res.send(`Person ${req.params.id} does not exist`)
  })
});

/* Get request for edit route */
router.get('/:id/edit', (req, res, next)=> {
  // finding requested person
  models.Person.findById(req.params.id)
  .then( (person)=> {
    res.render('people/edit', {
      // setting person's name as tab title
      title: `Editing ${person.name}`,
      person: person
    })
  })
  .catch( (error)=> {
    res.send(`Person ${req.params.id} does not exist and can't be edited`)
  })
})

/* Route for editing a user */
router.put('/:id', (req, res, next)=> {
  // updating requested person record. - using sequelize's update method
  models.Person.update({
    name: req.body.name,
    favoriteCity:req.body.favoriteCity
    // editing name where record matches id from req object
  }, {where: {id: req.params.id} })
  .then( ()=> {
    // redirecting to person page to show edited data
    res.redirect(`/people/${req.params.id}`)
  })
});

/* Route to handle DELETE request for a particular person */
router.delete('/:id', (req, res, next)=> {
  // using sequelize's destroy method to remove requested record from database
  models.Person.destroy({
    // Deleting person based off id from request object
    where: {id: req.params.id}
  })
  .then( ()=> {
    // redirecting to people page
    res.redirect('/people');
  })
})




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
