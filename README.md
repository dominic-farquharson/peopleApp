### Installation Instructions:

1. Clone or download repo.
1. All of the needed dependencies are included within the package.json.
1. Run npm install in root of project folder.
    1. Make sure the latest version of Node is installed.
1. After it is installed, use the **npm run start** script to start the app.

### Technologies Used:
- HTML
- CSS
- JavaScript
- jQuery
- Express.js
- Postgres SQL
- UI Kit
- Boostrap
- Sequelize ORM

### Sample Code: Edit User Route
```javascript
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
```

### App Walkthrough / Instructions
1. Click Get Started to view list of all people and go to /people route.
1. When on the /people route, click Create New Person.
    1. This will direct you to /people/new route which contains a create new person form.
1. After entering the relevant data within the input fields, click Create New Person.
    1. This will perform a POST request to /people.
    1. User is then redirected from the /people/new route to the /people route which contains a list of all the people.
1. On the /people route you are presented with a list of all people. Click on the person you would like to view.
    1. Clicking on a person redirects you to people/:id, where :id reprsents the id of the selected person.
1. The people/:id route contains the person's information and an edit/delete button.
    1. Edit: Redirects to people/:id/edit which contains an Edit Person form. Clicking edit will perform a PUT request to /people/:id.
    1. Delete: Clicking delete will perform a DELETE request to people/:id. After deletion, user is redirected to /people.
