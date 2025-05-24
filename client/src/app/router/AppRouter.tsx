import {
  GamePage,
  MainPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from "@/pages";
import { CLIENT_ROUTES } from "@/types/enums";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GameLayout } from "../layout/GameLayout";
import { Layout } from "../layout/Layout";
import { useUser } from "../store/UserStore/hooks/useUser";
import { useEffect } from "react";

function AppRouter() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(CLIENT_ROUTES.SIGN_IN);
    } else {
      navigate(CLIENT_ROUTES.MAIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={CLIENT_ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={CLIENT_ROUTES.SIGN_UP} element={<SignUpPage />} />

        <Route element={<GameLayout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
          <Route path={CLIENT_ROUTES.GAME} element={<GamePage />} />
        </Route>
        <Route path={CLIENT_ROUTES.PROFILE} element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
