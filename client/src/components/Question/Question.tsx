import type { IQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { useGame } from "@/app/store/GameContext/hooks/useGame";
import { useCallback } from "react";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  const { openModal, game } = useGame();

  const isAnswered = game?.game_answer_question?.some(
    (answered) => answered.question_id === question.id
  );

  const handleClick = useCallback(() => {
    if (!isAnswered) {
      openModal(question);
    }
  }, [isAnswered, openModal, question]);

  return (
    <div
      className={`${styles.question} ${isAnswered ? styles.answered : ""}`}
      onClick={handleClick}
    >
      {question.points}
    </div>
  );
};
