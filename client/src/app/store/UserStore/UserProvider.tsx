import type React from "react";
import { UserContext } from "./UserContext";
import type { IUser } from "@/types/user";
import { useState } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
