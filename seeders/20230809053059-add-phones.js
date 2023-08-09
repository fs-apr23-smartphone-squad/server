'use strict';

const TABLE_NAME = 'phones';

const phones = require('../api/phones.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      phones.map((phone) => ({
        ...phone,
        description: JSON.stringify(phone.description),
        category: 'phones'
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
