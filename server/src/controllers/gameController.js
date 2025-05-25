const {
  searchGameUser,
  searchGamesNoFinish,
  updateGame,
  createGame,
} = require("../services/gameService");

const getAllGame = async (req, res, next) => {
  try {
    const user_id = res.locals.user.id;

    const game = await searchGameUser(user_id);

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

const getGame = async (req, res, next) => {
  try {
    const user_id = res.locals.user.id;

    const game = await searchGamesNoFinish(user_id);

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

const postGame = async (req, res, next) => {
  try {
    const user_id = res.locals.user.id;

    const game = await createGame(user_id);

    res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};

const putGame = async (req, res, next) => {
  try {
    const user_id = res.locals.user.id;
    const game_id = req.body;

    const game = await updateGame(user_id, game_id);

    res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllGame, getGame, postGame, putGame };
