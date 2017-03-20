var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'People App' })
});

/* Handling non existant routes */
router.get('/:id', function(req, res, next) {
  // Moving to next middleware if req is equal to people route - preventing people route from showing up as an error
  if(req.params.id === 'people') {
    return next();
  }
  // error message
  res.json({error: 'page does not exist'})
});


module.exports = router;
