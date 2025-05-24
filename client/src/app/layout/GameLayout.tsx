import { GameProvider } from "@/app/store/GameContext/GameProvider";
import { Outlet } from "react-router-dom";

export const GameLayout = () => {
  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
};
