import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { CLIENT_ROUTES } from "@/types/enums";
import { gameApi } from "@/services/api/gameApi";
import { useGame } from "@/app/store/GameContext/hooks/useGame";

export const StartGame = () => {
  const { createGame } = useGame();
  const navigate = useNavigate();

  const handleStartGame = () => {
    gameApi.createGame().then((data) => {
      createGame(data);
      navigate(CLIENT_ROUTES.GAME);
    });
  };

  return (
    <>
      <h2>StartGame</h2>
      <Button onClick={handleStartGame} buttonText="Начать игру" />
    </>
  );
};
