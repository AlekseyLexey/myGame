const {searchCategory} = require('../services/categoryService')

const getCategory = async (req,res,next) => {
    try{
        const category = await searchCategory()

        res.status(200).json(category)
    }catch(error){
        next(error)
    }
}

module.exports = {getCategory}