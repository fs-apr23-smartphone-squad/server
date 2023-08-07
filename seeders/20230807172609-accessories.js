'use strict';

const TABLE_NAME = 'accessories';

const accessories = require('../api/accessories.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      accessories.map((accessory) => ({
        ...accessory,
        description: JSON.stringify(accessory.description),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  },
};
