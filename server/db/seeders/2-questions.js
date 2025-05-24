// 2-questions.js
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
        points: 20,
      },
      {
        category_id: 1,
        question: 'Какой русский царь провел масштабные реформы в начале XVIII века?',
        points: 30,
      },
      {
        category_id: 1,
        question: 'В каком году человек впервые полетел в космос?',
        points: 40,
      },
      {
        category_id: 1,
        question: 'Какая древняя цивилизация построила пирамиды в Гизе?',
        points: 50,
      },
      
      // Вопросы для категории "Наука" (id: 2)
      {
        category_id: 2,
        question: 'Какой химический элемент обозначается символом "H"?',
        points: 10,
      },
      {
        category_id: 2,
        question: 'Кто открыл закон всемирного тяготения?',
        points: 20,
      },
      {
        category_id: 2,
        question: 'Как называется самая большая планета Солнечной системы?',
        points: 30,
      },
      {
        category_id: 2,
        question: 'Какой газ преобладает в атмосфере Земли?',
        points: 40,
      },
      {
        category_id: 2,
        question: 'Какой ученый разработал теорию относительности?',
        points: 50,
      },
      
      // Вопросы для категории "Искусство" (id: 3)
      {
        category_id: 3,
        question: 'Кто написал картину "Мона Лиза"?',
        points: 10,
      },
      {
        category_id: 3,
        question: 'Какой композитор написал "Лунную сонату"?',
        points: 20,
      },
      {
        category_id: 3,
        question: 'В каком веке жил и творил Рембрандт?',
        points: 30,
      },
      {
        category_id: 3,
        question: 'Какой стиль архитектуры характеризуется остроконечными арками и витражами?',
        points: 40,
      },
      {
        category_id: 3,
        question: 'Кто автор романа "Война и мир"?',
        points: 50,
      },
      
      // Вопросы для категории "Спорт" (id: 4)
      {
        category_id: 4,
        question: 'В каком виде спорта известен Лионель Месси?',
        points: 10,
      },
      {
        category_id: 4,
        question: 'Сколько колец на олимпийском флаге?',
        points: 20,
      },
      {
        category_id: 4,
        question: 'Какой теннисист выиграл наибольшее количество турниров Большого шлема?',
        points: 30,
      },
      {
        category_id: 4,
        question: 'В каком году проходили Олимпийские игры в Москве?',
        points: 40,
      },
      {
        category_id: 4,
        question: 'Какой вид спорта называют "королевой спорта"?',
        points: 50,
      },
      
      // Вопросы для категории "География" (id: 5)
      {
        category_id: 5,
        question: 'Какая самая длинная река в мире?',
        points: 10,
      },
      {
        category_id: 5,
        question: 'В какой стране находится город Барселона?',
        points: 20,
      },
      {
        category_id: 5,
        question: 'Какой океан самый большой по площади?',
        points: 30,
      },
      {
        category_id: 5,
        question: 'Какая самая высокая гора в мире?',
        points: 40,
      },
      {
        category_id: 5,
        question: 'Столица Австралии?',
        points: 50,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};