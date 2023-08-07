'use strict';

const TABLE_NAME = 'products';

const products = require('../api/products.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(TABLE_NAME, products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
