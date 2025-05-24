
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [
      {
        user_id: 1,
        score: 15,
        is_finished: true,
      },
      {
        user_id: 1,
        score: 25,
        is_finished: true,
      },
      {
        user_id: 1,
        score: 0,
        is_finished: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', { user_id: 1 }, {});
  }
};