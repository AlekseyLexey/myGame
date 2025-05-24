'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsToMany(models.Game, {
        through: 'Answer_Question',
        foreignKey: 'question_id',
        otherKey: 'game_id'
      })

      Question.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'question_category'
      })

      Question.hasMany(models.Answer, {
        foreignKey: 'question_id',
        as: 'question_answer'
      })
    }
  }
  Question.init({
    category_id: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};