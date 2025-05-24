import { useGame } from "@/app/store/GameContext/hooks/useGame";
import { CategoriesContainer, QuestionModal } from "@/components";
import { gameApi } from "@/services/api/gameApi";
import type { ICategory } from "@/types/game";
import { useEffect, useState } from "react";

export const GamePage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { isModalOpen, currentQuestion, game } = useGame();

  useEffect(() => {
    gameApi.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <h1>GamePage</h1>
      <CategoriesContainer categories={categories} />
      {isModalOpen && currentQuestion && game && (
        <QuestionModal question={currentQuestion} />
      )}
    </div>
  );
};
