// 3-answers.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // Ответы для вопроса "В каком году началась Вторая мировая война?" (id: 1)
      { question_id: 1, answer_option: '1939', is_correct: true },
      { question_id: 1, answer_option: '1941', is_correct: false },
      { question_id: 1, answer_option: '1914', is_correct: false },
      { question_id: 1, answer_option: '1935', is_correct: false },
      
      // Ответы для вопроса "Кто был первым президентом США?" (id: 2)
      { question_id: 2, answer_option: 'Джордж Вашингтон', is_correct: true },
      { question_id: 2, answer_option: 'Авраам Линкольн', is_correct: false },
      { question_id: 2, answer_option: 'Томас Джефферсон', is_correct: false },
      { question_id: 2, answer_option: 'Джон Адамс', is_correct: false },
      
      // Ответы для вопроса "Какой русский царь провел масштабные реформы..." (id: 3)
      { question_id: 3, answer_option: 'Петр I', is_correct: true },
      { question_id: 3, answer_option: 'Иван Грозный', is_correct: false },
      { question_id: 3, answer_option: 'Александр II', is_correct: false },
      { question_id: 3, answer_option: 'Николай II', is_correct: false },
      
      // Ответы для вопроса "В каком году человек впервые полетел в космос?" (id: 4)
      { question_id: 4, answer_option: '1961', is_correct: true },
      { question_id: 4, answer_option: '1957', is_correct: false },
      { question_id: 4, answer_option: '1969', is_correct: false },
      { question_id: 4, answer_option: '1975', is_correct: false },
      
      // Ответы для вопроса "Какая древняя цивилизация построила пирамиды..." (id: 5)
      { question_id: 5, answer_option: 'Древний Египет', is_correct: true },
      { question_id: 5, answer_option: 'Майя', is_correct: false },
      { question_id: 5, answer_option: 'Древняя Греция', is_correct: false },
      { question_id: 5, answer_option: 'Древний Рим', is_correct: false },
      
      // Ответы для вопроса "Какой химический элемент обозначается символом "H"?" (id: 6)
      { question_id: 6, answer_option: 'Водород', is_correct: true },
      { question_id: 6, answer_option: 'Гелий', is_correct: false },
      { question_id: 6, answer_option: 'Гафний', is_correct: false },
      { question_id: 6, answer_option: 'Германий', is_correct: false },
      
      // Ответы для вопроса "Кто открыл закон всемирного тяготения?" (id: 7)
      { question_id: 7, answer_option: 'Исаак Ньютон', is_correct: true },
      { question_id: 7, answer_option: 'Альберт Эйнштейн', is_correct: false },
      { question_id: 7, answer_option: 'Галилео Галилей', is_correct: false },
      { question_id: 7, answer_option: 'Никола Тесла', is_correct: false },
      
      // Ответы для вопроса "Как называется самая большая планета Солнечной системы?" (id: 8)
      { question_id: 8, answer_option: 'Юпитер', is_correct: true },
      { question_id: 8, answer_option: 'Сатурн', is_correct: false },
      { question_id: 8, answer_option: 'Земля', is_correct: false },
      { question_id: 8, answer_option: 'Нептун', is_correct: false },
      
      // Ответы для вопроса "Какой газ преобладает в атмосфере Земли?" (id: 9)
      { question_id: 9, answer_option: 'Азот', is_correct: true },
      { question_id: 9, answer_option: 'Кислород', is_correct: false },
      { question_id: 9, answer_option: 'Углекислый газ', is_correct: false },
      { question_id: 9, answer_option: 'Водород', is_correct: false },
      
      // Ответы для вопроса "Какой ученый разработал теорию относительности?" (id: 10)
      { question_id: 10, answer_option: 'Альберт Эйнштейн', is_correct: true },
      { question_id: 10, answer_option: 'Исаак Ньютон', is_correct: false },
      { question_id: 10, answer_option: 'Стивен Хокинг', is_correct: false },
      { question_id: 10, answer_option: 'Никола Тесла', is_correct: false },
      
      // Ответы для вопроса "Кто написал картину "Мона Лиза"?" (id: 11)
      { question_id: 11, answer_option: 'Леонардо да Винчи', is_correct: true },
      { question_id: 11, answer_option: 'Пабло Пикассо', is_correct: false },
      { question_id: 11, answer_option: 'Винсент ван Гог', is_correct: false },
      { question_id: 11, answer_option: 'Микеланджело', is_correct: false },
      
      // Ответы для вопроса "Какой композитор написал "Лунную сонату"?" (id: 12)
      { question_id: 12, answer_option: 'Людвиг ван Бетховен', is_correct: true },
      { question_id: 12, answer_option: 'Вольфганг Амадей Моцарт', is_correct: false },
      { question_id: 12, answer_option: 'Иоганн Себастьян Бах', is_correct: false },
      { question_id: 12, answer_option: 'Фредерик Шопен', is_correct: false },
      
      // Ответы для вопроса "В каком веке жил и творил Рембрандт?" (id: 13)
      { question_id: 13, answer_option: 'XVII', is_correct: true },
      { question_id: 13, answer_option: 'XVI', is_correct: false },
      { question_id: 13, answer_option: 'XVIII', is_correct: false },
      { question_id: 13, answer_option: 'XIX', is_correct: false },
      
      // Ответы для вопроса "Какой стиль архитектуры характеризуется остроконечными арками..." (id: 14)
      { question_id: 14, answer_option: 'Готика', is_correct: true },
      { question_id: 14, answer_option: 'Барокко', is_correct: false },
      { question_id: 14, answer_option: 'Ренессанс', is_correct: false },
      { question_id: 14, answer_option: 'Классицизм', is_correct: false },
      
      // Ответы для вопроса "Кто автор романа "Война и мир"?" (id: 15)
      { question_id: 15, answer_option: 'Лев Толстой', is_correct: true },
      { question_id: 15, answer_option: 'Федор Достоевский', is_correct: false },
      { question_id: 15, answer_option: 'Антон Чехов', is_correct: false },
      { question_id: 15, answer_option: 'Иван Тургенев', is_correct: false },
      
      // Ответы для вопроса "В каком виде спорта известен Лионель Месси?" (id: 16)
      { question_id: 16, answer_option: 'Футбол', is_correct: true },
      { question_id: 16, answer_option: 'Баскетбол', is_correct: false },
      { question_id: 16, answer_option: 'Теннис', is_correct: false },
      { question_id: 16, answer_option: 'Гольф', is_correct: false },
      
      // Ответы для вопроса "Сколько колец на олимпийском флаге?" (id: 17)
      { question_id: 17, answer_option: '5', is_correct: true },
      { question_id: 17, answer_option: '6', is_correct: false },
      { question_id: 17, answer_option: '4', is_correct: false },
      { question_id: 17, answer_option: '7', is_correct: false },
      
      // Ответы для вопроса "Какой теннисист выиграл наибольшее количество турниров..." (id: 18)
      { question_id: 18, answer_option: 'Новак Джокович', is_correct: true },
      { question_id: 18, answer_option: 'Рафаэль Надаль', is_correct: false },
      { question_id: 18, answer_option: 'Роджер Федерер', is_correct: false },
      { question_id: 18, answer_option: 'Пит Сампрас', is_correct: false },
      
      // Ответы для вопроса "В каком году проходили Олимпийские игры в Москве?" (id: 19)
      { question_id: 19, answer_option: '1980', is_correct: true },
      { question_id: 19, answer_option: '1976', is_correct: false },
      { question_id: 19, answer_option: '1984', is_correct: false },
      { question_id: 19, answer_option: '1972', is_correct: false },
      
      // Ответы для вопроса "Какой вид спорта называют "королевой спорта"?" (id: 20)
      { question_id: 20, answer_option: 'Легкая атлетика', is_correct: true },
      { question_id: 20, answer_option: 'Гимнастика', is_correct: false },
      { question_id: 20, answer_option: 'Фигурное катание', is_correct: false },
      { question_id: 20, answer_option: 'Плавание', is_correct: false },
      
      // Ответы для вопроса "Какая самая длинная река в мире?" (id: 21)
      { question_id: 21, answer_option: 'Нил', is_correct: true },
      { question_id: 21, answer_option: 'Амазонка', is_correct: false },
      { question_id: 21, answer_option: 'Янцзы', is_correct: false },
      { question_id: 21, answer_option: 'Миссисипи', is_correct: false },
      
      // Ответы для вопроса "В какой стране находится город Барселона?" (id: 22)
      { question_id: 22, answer_option: 'Испания', is_correct: true },
      { question_id: 22, answer_option: 'Италия', is_correct: false },
      { question_id: 22, answer_option: 'Франция', is_correct: false },
      { question_id: 22, answer_option: 'Португалия', is_correct: false },
      
      // Ответы для вопроса "Какой океан самый большой по площади?" (id: 23)
      { question_id: 23, answer_option: 'Тихий', is_correct: true },
      { question_id: 23, answer_option: 'Атлантический', is_correct: false },
      { question_id: 23, answer_option: 'Индийский', is_correct: false },
      { question_id: 23, answer_option: 'Северный Ледовитый', is_correct: false },
      
      // Ответы для вопроса "Какая самая высокая гора в мире?" (id: 24)
      { question_id: 24, answer_option: 'Эверест', is_correct: true },
      { question_id: 24, answer_option: 'Килиманджаро', is_correct: false },
      { question_id: 24, answer_option: 'Аконкагуа', is_correct: false },
      { question_id: 24, answer_option: 'Мак-Кинли', is_correct: false },
      
      // Ответы для вопроса "Столица Австралии?" (id: 25)
      { question_id: 25, answer_option: 'Канберра', is_correct: true },
      { question_id: 25, answer_option: 'Сидней', is_correct: false },
      { question_id: 25, answer_option: 'Мельбурн', is_correct: false },
      { question_id: 25, answer_option: 'Брисбен', is_correct: false }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};