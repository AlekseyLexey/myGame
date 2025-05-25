const { getActualGame } = require("../services/actualGameService");

const getActualGameController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = res.locals.user.id;

    const game = await getActualGame(id, user_id);

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

module.exports = { getActualGameController };
