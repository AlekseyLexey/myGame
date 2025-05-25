const { Game, Question } = require("../../db/models");

const searchGameUser = async (id) => {
  const data = await Game.findAll({
    where: { user_id: id },
    attributes: ["score"],
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  return data;
};

const searchGamesNoFinish = async (id) => {
  const data = await Game.findAll({
    where: {
      user_id: id,
      is_finished: false,
    },
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: Question,
        as: "game_answer_question",
        attributes: ["id"],
        through: {
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      },
    ],
  });

  return data;
};

const createGame = async (user_id) => {
  const data = await Game.create({
    user_id: user_id,
  });

  const game = data.get({ plain: true });
  game.game_answer_question = [];

  return game;
};

const updateGame = async (user_id, game_id) => {
  const data = await Game.update(
    { is_finished: true },
    {
      where: {
        id: game_id,
        user_id: user_id,
      },
    }
  );

  return data;
};

module.exports = {
  searchGameUser,
  searchGamesNoFinish,
  createGame,
  updateGame,
};
