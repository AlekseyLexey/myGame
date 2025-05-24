'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.Question, {
        through: 'Answer_Question',
        foreignKey: 'game_id',
        otherKey: 'question_id'
      })

      Game.belongsTo(models.User, {
          foreignKey: 'user_id',    
          as: 'game_user'               
        });
    }
  }
  Game.init({
    user_id: DataTypes.INTEGER,
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    is_finished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};