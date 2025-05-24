import { useGame } from "@/app/store/GameContext/hooks/useGame";
import type { IQuestion } from "@/types/game";
import styles from "./QuestionModal.module.scss";
import { Button } from "../UI/Button/Button";

export const QuestionModal = ({ question }: { question: IQuestion }) => {
  const { selectedAnswer, game, selectAnswer, submitAnswer, closeModal } =
    useGame();

  const handleSubmitAnswer = async (
    game_id: number,
    question_id: number,
    answer_id: number
  ) => {
    try {
      await submitAnswer(game_id, question_id, answer_id);
      if (selectedAnswer?.is_correct) {
        alert(`Вы ответили правильно! И заработали ${question.points} очков`);
      } else {
        alert("К сожалению, вы ответили неправильно");
      }
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{question.question}</h3>
        <span className={styles.points}>{question.points} очков</span>

        {selectedAnswer && <h3>Вы выбрали: {selectedAnswer.answer_option}</h3>}
        <div className={styles.answers}>
          {question.question_answer.map((answer) => (
            <Button
              key={answer.id}
              onClick={() => selectAnswer(answer)}
              buttonText={answer.answer_option}
            />
          ))}
        </div>

        <Button
          className={styles.closeButton}
          onClick={closeModal}
          buttonText="Закрыть"
        />
        {selectedAnswer && (
          <Button
            buttonText="Ответить"
            className={styles.answerButton}
            onClick={() =>
              handleSubmitAnswer(game!.id, question.id, selectedAnswer.id)
            }
          />
        )}
      </div>
    </div>
  );
};
