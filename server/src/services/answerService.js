const { Game, Question, Answer, Answer_Question } = require("../../db/models");
const HttpError = require("../exceptions/HttpError");

const createAnswer = async (game_id, question_id) => {
  const data = await Answer_Question.create({
    game_id: game_id,
    question_id: question_id,
    is_answered: true,
  });

  return data;
};

const isCorrectAnswer = async (answer_id) => {
  const data = await Answer.findOne({
    where: { id: answer_id },
  });

  return data ? data.is_correct : false;
};

const searchQuestion = async (question_id) => {
  const data = await Question.findOne({
    where: { id: question_id },
  });

  return data ? data.points : 0;
};

const updateGameScore = async (point, user_id, game_id) => {
  const game = await Game.findOne({
    where: {
      id: game_id,
      user_id: user_id,
    },
  });

  if (!game) {
    throw new HttpError(404, "Игра не найдена");
  }

  game.score += point;
  await game.save();

  return game;
};

module.exports = {
  createAnswer,
  isCorrectAnswer,
  searchQuestion,
  updateGameScore,
};
