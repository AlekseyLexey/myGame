const {
  createAnswer,
  isCorrectAnswer,
  searchQuestion,
  updateGameScore,
} = require("../services/answerService");

const postAnswer = async (req, res, next) => {
  try {
    const user_id = res.locals.user.id;

    const { game_id, question_id, answer_id } = req.body;

    await createAnswer(game_id, question_id);

    const correct = await isCorrectAnswer(answer_id);

    const point = await searchQuestion(question_id);

    const updatedGame = correct
      ? await updateGameScore(point, user_id, game_id)
      : await updateGameScore(-point, user_id, game_id);

    res.status(201).json(updatedGame);
  } catch (error) {
    next(error);
  }
};

module.exports = { postAnswer };
