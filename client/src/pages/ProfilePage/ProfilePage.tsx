import { useState, useEffect } from "react";
import { useUser } from "@/app/store/UserStore/hooks/useUser";
import { gameApi } from "@/services/api/gameApi";
import type { IGame } from "@/types/game";
import styles from "./ProfilePage.module.scss"; // Импорт стилей

export const ProfilePage = () => {
  const { user } = useUser();
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    gameApi.getAllGames().then(data => setGames(data));
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>История игр пользователя {user?.username}</h1>
      
      {games.length === 0 ? (
        <p className={styles.noGamesMessage}>Вы еще не сыграли ни одной игры.</p>
      ) : (
        <div className={styles.gamesTableContainer}>
          <table className={styles.gamesTable}>
            <thead>
              <tr>
                <th>ID игры</th>
                <th>Счет</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.id}</td>
                  <td>{game.score}</td>
                  <td className={game.is_finished ? styles.statusFinished : styles.statusInProgress}>
                    {game.is_finished ? "Завершена" : "В процессе"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
