import { createContext } from "react";
import type { IUser } from "@/types/user";

interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const UserContext = createContext<IUserContext | null>(null);
