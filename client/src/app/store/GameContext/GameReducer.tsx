import type { GameState, GameAction } from "@/types/game";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        currentQuestion: action.payload,
        selectedAnswer: null,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswer: action.payload,
      };

    case "UPDATE_GAME":
      return {
        ...state,
        game: action.payload,
      };

    case "MARK_QUESTION_ANSWERED":
      return {
        ...state,
        game: state.game
          ? {
              ...state.game,
              answered_questions: [
                ...state.game.answered_questions,
                action.payload,
              ],
            }
          : null,
      };

    default:
      return state;
  }
}
