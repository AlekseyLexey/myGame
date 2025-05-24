export interface IGame {
  id: number;
  user_id: number;
  score: number;
  is_finished: boolean;
  game_answer_question: IAnsweredQuestion[];
}

export interface IAnsweredQuestion {
  id?: number;
  game_id?: number;
  question_id: number;
  is_answered?: boolean;
}

export interface ICategory {
  id: number;
  game_id: number;
  category: string;
  category_question: IQuestion[];
}

export interface IQuestion {
  id: number;
  category_id: number;
  question: string;
  points: number;
  question_answer: IAnswer[];
}

export interface IAnswer {
  id: number;
  question_id: number;
  answer_option: string;
  is_correct: boolean;
}

export interface GameState {
  game: IGame | null;
  isModalOpen: boolean;
  currentQuestion: IQuestion | null;
  selectedAnswer: IAnswer | null;
}

export type GameAction =
  | { type: "OPEN_MODAL"; payload: IQuestion }
  | { type: "CLOSE_MODAL" }
  | { type: "SELECT_ANSWER"; payload: IAnswer }
  | {
      type: "SUBMIT_ANSWER";
      payload: { game_id: number; question_id: number; answer_id: number };
    }
  | { type: "UPDATE_GAME"; payload: IGame }
  | {
      type: "MARK_QUESTION_ANSWERED";
      payload: { question_id: number };
    }
  | { type: "CREATE_GAME"; payload: IGame }
  | { type: "UPDATE_SCORE"; payload: number };
