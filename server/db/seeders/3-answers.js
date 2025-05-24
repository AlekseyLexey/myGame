'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // Ответы для вопроса "В каком году началась Вторая мировая война?" (id: 1)
      {
        question_id: 1,
        answer_option: '1939',
        is_correct: true,
      },
      {
        question_id: 1,
        answer_option: '1941',
        is_correct: false,
      },
      {
        question_id: 1,
        answer_option: '1914',
        is_correct: false,
      },
      
      // Ответы для вопроса "Кто был первым президентом США?" (id: 2)
      {
        question_id: 2,
        answer_option: 'Джордж Вашингтон',
        is_correct: true,
      },
      {
        question_id: 2,
        answer_option: 'Авраам Линкольн',
        is_correct: false,
      },
      
      // Ответы для вопроса "Какой химический элемент обозначается символом "H"?" (id: 3)
      {
        question_id: 3,
        answer_option: 'Гелий',
        is_correct: false,
      },
      {
        question_id: 3,
        answer_option: 'Водород',
        is_correct: true,
      },
      
      // Ответы для вопроса "Кто открыл закон всемирного тяготения?" (id: 4)
      {
        question_id: 4,
        answer_option: 'Альберт Эйнштейн',
        is_correct: false,
      },
      {
        question_id: 4,
        answer_option: 'Исаак Ньютон',
        is_correct: true,
      },
      
      // Ответы для вопроса "Кто написал картину "Мона Лиза"?" (id: 5)
      {
        question_id: 5,
        answer_option: 'Леонардо да Винчи',
        is_correct: true,
      },
      {
        question_id: 5,
        answer_option: 'Пабло Пикассо',
        is_correct: false,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};