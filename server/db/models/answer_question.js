"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer_Question.belongsTo(models.Game, {
        foreignKey: "game_id",
      });

      Answer_Question.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }
  Answer_Question.init(
    {
      game_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      is_answered: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Answer_Question",
    }
  );
  return Answer_Question;
};
