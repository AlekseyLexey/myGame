import type { IAnswer, IGame, IQuestion } from "@/types/game";
import { createContext } from "react";

interface IGameContext {
  game: IGame | null;
  isModalOpen: boolean;
  currentQuestion: IQuestion | null;
  selectedAnswer: IAnswer | null;
  updateGame: (data: IGame) => void;
  openModal: (question: IQuestion) => void;
  closeModal: () => void;
  selectAnswer: (answer: IAnswer) => void;
  submitAnswer: (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => void;
  markQuestionAnswered: (question_id: number) => void;
  createGame: (data: IGame) => void;
}

export const GameContext = createContext<IGameContext | null>(null);
