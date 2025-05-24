const { Category, Question, Answer } = require('../../db/models')

const searchCategory = async() => {
    const data = await Category.findAll({
        include: [{
            model: Question,
            as: 'category_question',
            include: [{
                model: Answer,
                as: 'question_answer'
            }]
        }]
    })

    return data
}

module.exports = {searchCategory}