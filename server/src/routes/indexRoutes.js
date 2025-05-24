const router = require("express").Router();

const {
  registration,
  login,
  logout,
  refresh,
} = require("../controllers/userController");

const categoryRouter = require('./api/categoryRoter')
const gameRouter = require('./api/gameRouter')

// const authMiddleware = require("../middlewares/authMiddleware");

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh", refresh);

router.use("/category",categoryRouter)
router.use("/game", gameRouter)

module.exports = router;
