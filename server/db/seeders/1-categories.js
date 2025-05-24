'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        category: 'История',
      },
      {
        category: 'Наука',
      },
      {
        category: 'Искусство',
      },
      {
        category: 'Спорт',
      },
      {
        category: 'География', 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};