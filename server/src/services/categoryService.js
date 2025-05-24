const { Category, Question, Answer } = require('../../db/models')

const searchCategory = async() => {
    const data = await Category.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
            model: Question,
            as: 'category_question',
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: Answer,
                as: 'question_answer',
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }]
        }]
    })

    return data
}

module.exports = {searchCategory}