const bcrypt = require("bcrypt");
// !РАССКОМЕНТИРУЙ КОГДА СОЗДАШЬ МОДЕЛЬ
const { User } = require("../../db/models");
const {
  generateTokens,
  saveToken,
  removeToken,
  findToken,
  validateRefreshToken,
} = require("./tokenService");
const HttpError = require("../exceptions/HttpError");

const registrationService = async (username, password) => {
  const candidate = await User.findOne({ where: { username } });

  if (candidate) {
    throw new HttpError(400, "Пользователь с таким именем уже существует");
  }

  const hashPassword = await bcrypt.hash(password, 3);
  const user = await User.create({ username, password: hashPassword });

  const { password: _, ...payload } = user.get({ plain: true });

  const tokens = generateTokens(payload);
  await saveToken(payload.id, tokens.refreshToken);

  return {
    ...tokens,
    user: payload,
  };
};

const loginService = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (!user) {
    throw new HttpError(404, "Пользователя не существует");
  }

  const isPassEqual = await bcrypt.compare(password, user.password);

  if (!isPassEqual) {
    throw new HttpError(400, "Неверный пароль");
  }

  const { password: _, ...payload } = user.get({ plain: true });

  const tokens = generateTokens(payload);
  await saveToken(payload.id, tokens.refreshToken);

  return {
    ...tokens,
    user: payload,
  };
};

const logoutService = async (refreshToken) => {
  const countToken = await removeToken(refreshToken);
  return countToken;
};

const refreshService = async (refreshToken) => {
  if (!refreshToken) {
    throw new HttpError(403, "Пользователь не авторизован");
  }

  const isValid = validateRefreshToken(refreshToken);

  const tokenFromDB = await findToken(refreshToken);

  if (!isValid || !tokenFromDB) {
    throw new HttpError(403, "Пользователь не авторизован");
  }

  const user = await User.findByPk(tokenFromDB.user_id);

  const { password: _, ...payload } = user.get({ plain: true });

  const tokens = generateTokens(payload);
  await saveToken(payload.id, tokens.refreshToken);

  return {
    ...tokens,
    user: payload,
  };
};

module.exports = {
  registrationService,
  loginService,
  logoutService,
  refreshService,
};
