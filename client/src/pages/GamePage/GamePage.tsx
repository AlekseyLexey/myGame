import { useGame } from "@/app/store/GameContext/hooks/useGame";
import { CategoriesContainer, QuestionModal } from "@/components";
import Score from "@/components/Score/Score";
import { gameApi } from "@/services/api/gameApi";
import type { ICategory } from "@/types/game";
import { useEffect, useState } from "react";
import styles from "./GamePage.module.scss"; // Импорт стилей

export const GamePage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { isModalOpen, currentQuestion, game } = useGame();

  useEffect(() => {
    gameApi.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {" "}
      <h1 className={styles.title}>GamePage</h1> <Score />
      <CategoriesContainer categories={categories} />
      {isModalOpen && currentQuestion && game && (
        <QuestionModal question={currentQuestion} />
      )}
    </div>
  );
};
