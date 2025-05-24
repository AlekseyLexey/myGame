import { useUser } from "@/app/store/UserStore/hooks/useUser";
import { Button } from "../UI/Button/Button";
import styles from "./Header.module.scss";
import { CLIENT_ROUTES } from "@/types/enums";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate(CLIENT_ROUTES.SIGN_IN);
  };

  return (
    <div className={styles.header}>
      {user && (
        <>
          <Button onClick={handleLogout} buttonText="Выйти" />
          <h2>Привет, {user.username}</h2>
          <Button
            onClick={() => navigate(CLIENT_ROUTES.MAIN)}
            buttonText="На главную"
          />
          <Button
            onClick={() => navigate(CLIENT_ROUTES.PROFILE)}
            buttonText="Профиль"
          />
        </>
      )}
    </div>
  );
};
