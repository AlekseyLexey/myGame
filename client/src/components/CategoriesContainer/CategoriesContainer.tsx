import type { ICategory } from "@/types/game";
import styles from "./CategoriesContainer.module.scss";
import { Category } from "../Category/Category";

interface ICategoriesContainerProps {
  categories: ICategory[];
}

export const CategoriesContainer: React.FC<ICategoriesContainerProps> = ({
  categories,
}) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
