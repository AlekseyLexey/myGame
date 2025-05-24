import { useReducer } from "react";
import type { GameState, IAnswer, IGame, IQuestion } from "@/types/game";
import { GameContext } from "./GameContext";
import { gameApi } from "@/services/api/gameApi";
import { gameReducer } from "./GameReducer";

const initialState: GameState = {
  game: null,
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

  const markQuestionAnswered = (question_id: number) => {
    dispatch({ type: "MARK_QUESTION_ANSWERED", payload: { question_id } });
  };

  const submitAnswer = async (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => {
    if (state.selectedAnswer) {
      await gameApi.submitAnswer(game_id, question_id, answer_id);
      const actualGame = await gameApi.getGame();
      dispatch({ type: "UPDATE_GAME", payload: actualGame });
    }
  };

  const updateScore = async (points: number, isCorrect: boolean) => {
    dispatch({ type: "UPDATE_SCORE", payload: { points, isCorrect } });
  };

  const updateGame = async (data: IGame) => {
    dispatch({ type: "UPDATE_GAME", payload: data });
  };

  const createGame = async (data: IGame) => {
    dispatch({ type: "CREATE_GAME", payload: data });
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
        updateScore,
        markQuestionAnswered,
        createGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
