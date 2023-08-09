'use strict';

const TABLE_NAME = 'tablets';

const tablets = require('../api/tablets.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      tablets.map((tablet) => ({
        ...tablet,
        description: JSON.stringify(tablet.description),
        category: 'tablets'
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
