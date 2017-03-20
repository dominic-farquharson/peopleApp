'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Person', [
        {
          name: 'Sean',
          favoriteCity: "New York"
        },
        {
          name: 'Phil',
          favoriteCity: "Queens"
        },
        {
          name: 'Dominic',
          favoriteCity: "Boston"
        },
        {
          name: 'Alex',
          favoriteCity: "Chicago"
        },

      ], {});

  }
};
