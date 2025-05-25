const router = require("express").Router();

const {
  getActualGameController,
} = require("../../controllers/actualGameController");

router.get("/:id", getActualGameController);

module.exports = router;
