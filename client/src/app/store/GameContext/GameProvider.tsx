import { useReducer } from "react";
import type { GameState, IAnswer, IQuestion } from "@/types/game";
import { GameContext } from "./GameContext";
import { gameApi } from "@/services/api/gameApi";
import { gameReducer } from "./GameReducer";

const initialState: GameState = {
  game: { id: 1, user_id: 1, score: 0, is_finished: false },
  isModalOpen: false,
  currentQuestion: null,
  selectedAnswer: null,
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const openModal = (question: IQuestion) => {
    dispatch({ type: "OPEN_MODAL", payload: question });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const selectAnswer = (answer: IAnswer) => {
    dispatch({ type: "SELECT_ANSWER", payload: answer });
  };

  const submitAnswer = async (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => {
    if (state.selectedAnswer) {
      await gameApi.submitAnswer(game_id, question_id, answer_id);
      const updatedGame = await gameApi.getGame();
      dispatch({ type: "UPDATE_GAME", payload: updatedGame });
      closeModal();
    }
  };

  const updateGame = async () => {
    const game = await gameApi.getGame();
    dispatch({ type: "UPDATE_GAME", payload: game });
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        selectAnswer,
        submitAnswer,
        updateGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
