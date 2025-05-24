// файл: 5-user-answer-questions.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answer_Questions', [
      // Ответы для первой игры (id: 1)
      {
        game_id: 1,
        question_id: 1,
        is_answered: true,
      },
      {
        game_id: 1,
        question_id: 2,
        is_answered: true,
      },
      {
        game_id: 1,
        question_id: 3,
        is_answered: false,
      },
      
      // Ответы для второй игры (id: 2)
      {
        game_id: 2,
        question_id: 1,
        is_answered: true,
      },
      {
        game_id: 2,
        question_id: 4,
        is_answered: true,
      },
      {
        game_id: 2,
        question_id: 5,
        is_answered: true,
      },
      
      // Ответы для третьей игры (id: 3) - текущая игра
      {
        game_id: 3,
        question_id: 2,
        is_answered: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answer_Questions', {
      game_id: [1, 2, 3]
    }, {});
  }
};