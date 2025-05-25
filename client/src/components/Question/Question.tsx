import type { IQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { useGame } from "@/app/store/GameContext/hooks/useGame";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  const { openModal, game } = useGame();

  let isAnswered = false;

  for (const answer of game!.game_answer_question) {
    if (answer.Answer_Question.question_id === question.id) {
      isAnswered = true;
      break;
    }
  }

  const handleClick = () => {
    if (!isAnswered) {
      openModal(question);
    }
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
