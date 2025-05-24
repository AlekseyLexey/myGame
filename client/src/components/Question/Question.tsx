import type { IQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { useGame } from "@/app/store/GameContext/hooks/useGame";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  const { openModal, game } = useGame();

  const isAnswered = game?.answered_questions.some(
    (answeredQuestion) => answeredQuestion.question_id === question.id
  );

  const handleClick = () => {
    if (isAnswered) {
      return;
    }
    openModal(question);
  };

  return (
    <div
      className={`${styles.question} ${isAnswered ? styles.answered : ""}`}
      onClick={handleClick}
    >
      {question.points}
    </div>
  );
};
