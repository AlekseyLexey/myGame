const router = require("express").Router();

const {getAllGame,getGame,postGame,putGame} = require('../../controllers/gameController')

router.get('/mygame',getAllGame)
router.get('/',getGame)
router.post('/',postGame)
router.put('/',putGame)

module.exports = router;