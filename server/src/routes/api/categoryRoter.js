const router = require("express").Router();

const {getCategory} = require('../../controllers/categoryController')

router.get('/',getCategory)

module.exports = router;