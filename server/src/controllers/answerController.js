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

    const answer = await createAnswer(game_id, question_id);

    const correct = await isCorrectAnswer(answer_id);

    if (correct) {
      const point = await searchQuestion(question_id);

      const gamePoint = await updateGameScore(point, game_id, user_id);
    }

    res.status(201).json(answer);
  } catch (error) {
    next(error);
  }
};

module.exports = { postAnswer };
