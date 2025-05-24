import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { CLIENT_ROUTES } from "@/types/enums";

export const StartGame = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>StartGame</h2>
      <Button
        onClick={() => navigate(CLIENT_ROUTES.GAME)}
        buttonText="Начать игру"
      />
    </>
  );
};
