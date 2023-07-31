'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const phones = require('./20230731194315-products.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', phones);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', {
      name: phones.map(({ name }) => name)
    });
  }
};
