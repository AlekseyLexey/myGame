import { useGame } from "@/app/store/GameContext/hooks/useGame";
import { CategoriesContainer } from "@/components";
import { QuestionModal } from "@/components/QuestionModal/QuestionModal";
import type { ICategory, IQuestion } from "@/types/game";
import { useEffect, useState } from "react";

export const GamePage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const {
    isModalOpen,
    currentQuestion,
    selectedAnswer,
    closeModal,
    submitAnswer,
    game,
  } = useGame();

  const mockQuestionOne: IQuestion = {
    id: 1,
    category_id: 1,
    question: "Какая столица Франции?",
    points: 100,
    answers: [
      { id: 1, question_id: 1, answer: "Берлин", is_correct: false },
      { id: 2, question_id: 1, answer: "Париж", is_correct: true },
      { id: 3, question_id: 1, answer: "Лондон", is_correct: false },
      { id: 4, question_id: 1, answer: "Мадрид", is_correct: false },
    ],
  };

  const mockQuestionTwo: IQuestion = {
    id: 2,
    category_id: 1,
    question: "Какая столица Германии?",
    points: 100,
    answers: [
      { id: 1, question_id: 2, answer: "Берлин", is_correct: false },
      { id: 2, question_id: 2, answer: "Париж", is_correct: true },
      { id: 3, question_id: 2, answer: "Лондон", is_correct: false },
      { id: 4, question_id: 2, answer: "Мадрид", is_correct: false },
    ],
  };

  const category: ICategory = {
    id: 1,
    game_id: 1,
    category: "История",
    questions: [mockQuestionOne, mockQuestionTwo],
  };

  useEffect(() => {
    setCategories([category]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>GamePage</h1>
      <CategoriesContainer categories={categories} />
      {isModalOpen && currentQuestion && game && (
        <QuestionModal
          game={game}
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onClose={closeModal}
          submitAnswer={submitAnswer}
        />
      )}
    </div>
  );
};
