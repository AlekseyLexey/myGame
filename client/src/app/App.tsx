import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { GamePage, SignInPage, SignUpPage, ProfilePage } from "@/pages";
import { CLIENT_ROUTES } from "@/types/enums";
import { UserProvider } from "./store/UserStore/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path={CLIENT_ROUTES.GAME} element={<Layout />}>
          <Route path={CLIENT_ROUTES.GAME} element={<GamePage />} />
          <Route path={CLIENT_ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route path={CLIENT_ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={CLIENT_ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
