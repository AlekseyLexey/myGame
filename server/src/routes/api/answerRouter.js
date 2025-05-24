const router = require("express").Router();

const {postAnswer} = require('../../controllers/answerController')

router.post('/',postAnswer)

module.exports = router;