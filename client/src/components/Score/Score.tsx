import { useGame } from "@/app/store/GameContext/hooks/useGame";

const Score = () => {
  const { game } = useGame();

  return (
    <div>
      <h1>Score</h1>
      <p>{game?.score}</p>
    </div>
  );
};

export default Score;
