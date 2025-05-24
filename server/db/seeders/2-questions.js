'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Вопросы для категории "История" (id: 1)
      {
        category_id: 1,
        question: 'В каком году началась Вторая мировая война?',
        points: 10,
      },
      {
        category_id: 1,
        question: 'Кто был первым президентом США?',
        points: 5,
      },
      
      // Вопросы для категории "Наука" (id: 2)
      {
        category_id: 2,
        question: 'Какой химический элемент обозначается символом "H"?',
        points: 5,
      },
      {
        category_id: 2,
        question: 'Кто открыл закон всемирного тяготения?',
        points: 10,
      },
      
      // Вопросы для категории "Искусство" (id: 3)
      {
        category_id: 3,
        question: 'Кто написал картину "Мона Лиза"?',
        points: 5,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};