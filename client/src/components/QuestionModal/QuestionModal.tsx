import { useGame } from "@/app/store/GameContext/hooks/useGame";
import type { IAnswer, IGame, IQuestion } from "@/types/game";
import styles from "./QuestionModal.module.scss";
import { Button } from "../UI/Button/Button";

export const QuestionModal = ({
  question,
  selectedAnswer,
  onClose,
  submitAnswer,
  game,
}: {
  game: IGame;
  question: IQuestion;
  selectedAnswer: IAnswer | null;
  onClose: () => void;
  submitAnswer: (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => void;
}) => {
  const { selectAnswer } = useGame();

  const handleSubmitAnswer = async (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => {
    await submitAnswer(game_id, question_id, answer_id);
    if (selectedAnswer?.is_correct) {
      alert(`Вы ответили правильно! И заработали ${question.points} очков`);
    } else {
      alert("К сожалению, вы ответили неправильно");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{question.question}</h3>
        <span className={styles.points}>{question.points} очков</span>

        {selectedAnswer && <h3>Вы выбрали: {selectedAnswer.answer}</h3>}
        <div className={styles.answers}>
          {question.answers.map((answer) => (
            <Button
              key={answer.id}
              onClick={() => selectAnswer(answer)}
              buttonText={answer.answer}
            />
          ))}
        </div>

        <Button
          className={styles.closeButton}
          onClick={onClose}
          buttonText="Закрыть"
        />
        {selectedAnswer && (
          <Button
            buttonText="Ответить"
            className={styles.answerButton}
            onClick={() => {
              handleSubmitAnswer(game.id, question.id, selectedAnswer.id);
            }}
          />
        )}
      </div>
    </div>
  );
};
