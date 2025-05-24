import type { IQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { useGame } from "@/app/store/GameContext/hooks/useGame";
import { useCallback, useMemo } from "react";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  const { openModal, game } = useGame();

  const isAnswered = useMemo(() => {
    return game?.game_answer_question?.some(
      (answeredQuestion) => answeredQuestion.id === question.id
    );
  }, [game?.game_answer_question, question.id]);

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
