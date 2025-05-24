import type React from "react";
import { UserContext } from "./UserContext";
import type { IUser } from "@/types/user";
import { useEffect, useState } from "react";
import { refreshReq } from "@/services/api/userApi";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    refreshReq().then((res) => {
      setUser(res.user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
