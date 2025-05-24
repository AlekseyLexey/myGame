import type { IQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { useGame } from "@/app/store/GameContext/hooks/useGame";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  const { openModal } = useGame();

  return (
    <div className={styles.question} onClick={() => openModal(question)}>
      {question.points}
    </div>
  );
};
