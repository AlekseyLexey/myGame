import type { IGame } from "./game";

export interface IUser {
  id: number;
  username: string;
  password: string;
  games: IGame[];
}
