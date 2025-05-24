import type { ICategory } from "@/types/game";
import styles from "./Category.module.scss";
import { Question } from "../Question/Question";

interface ICategoryProps {
  category: ICategory;
}

export const Category: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <div className={styles.category}>
      <h3>{category.category}</h3>
      {category.category_question.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};
