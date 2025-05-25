const { Game, Question } = require("../../db/models");

const getActualGame = async (id, user_id) => {
  const data = await Game.findOne({
    where: {
      id,
      user_id,
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

module.exports = { getActualGame };
