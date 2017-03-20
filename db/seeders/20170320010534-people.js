'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('People', [
        {
          name: 'Sean',
          favoriteCity: "New York",
          createdAt: "2017-03-19",
          updatedAt: "2017-03-19"
        },
        {
          name: 'Phil',
          favoriteCity: "Queens",
          createdAt: "2017-03-19",
          updatedAt: "2017-03-19"
        },
        {
          name: 'Dominic',
          favoriteCity: "Boston",
          createdAt: "2017-03-19",
          updatedAt: "2017-03-19"
        },
        {
          name: 'Alex',
          favoriteCity: "Chicago",
          createdAt: "2017-03-19",
          updatedAt: "2017-03-19"
        },

      ], {});

  }
};
