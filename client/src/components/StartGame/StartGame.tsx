import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { CLIENT_ROUTES } from "@/types/enums";

export const StartGame = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate(CLIENT_ROUTES.GAME);
  };

  return (
    <>
      <h2>StartGame</h2>
      <Button onClick={handleStartGame} buttonText="Начать игру" />
    </>
  );
};
