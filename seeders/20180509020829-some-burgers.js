'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers',
      [
        {
          burger_name: 'SunnysideUp Burger',
          devoured: '0',
        },
        {
          burger_name: 'Chedder Burger',
          devoured: '0',
        },
        {
          burger_name: 'Garden Burger',
          devoured: '0',
        },
        {
          burger_name: 'Coranary Burger',
          devoured: '0',
        },
        {
          burger_name: 'Healthy Burger',
          devoured: '0',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Burgers', null, {});
  }
};
